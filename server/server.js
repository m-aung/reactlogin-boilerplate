// require('dotenv').config();
import dotenv from 'dotenv';

// const express = require('express');
import express from 'express';

// const cors = require('cors');
import cors from 'cors';

// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

import sessionController from './controllers/sessionController.js';

const app = express();
const port = process.env.PORT || 3000;
const SECRET = process.env.JWT_SECRET || 'BoilerPlate';
dotenv.config();

// static user details
const userData = {
  userId: '1121312',
  password: '1',
  name: 'admin',
  username: '1',
  isAdmin: true,
};

// enable CORS
app.use(cors());
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by');
//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use((req, res, next) => {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  token = token.replace('Bearer ', '');
  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: 'Invalid user.',
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});

// request handlers
app.get('/', (req, res) => {
  if (!req.user)
    return res
      .sendStatus(401)
      .json({ success: false, message: 'Invalid user to access it.' });
  res.send('Backend connected! - ' + req.user.name);
});

// validate the user credentials
app.post('/users/signin', (req, res) => {
  console.log('from backend /users/signin');
  const user = req.body.username;
  const pwd = req.body.password;

  // return 400 status if username/password is not exist
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: 'Username or Password required.',
    });
  }

  // return 401 status if the credential is not match.
  if (user !== userData.username || pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: 'Username or Password is Wrong.',
    });
  }

  // generate token
  const token = sessionController.generateToken(userData);
  // get basic user details
  const userObj = sessionController.getCleanUser(userData);
  // return the token along with user details
  return res.json({ user: userObj, token });
});

// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token;
  if (!token) {
    return res.status(400).json({
      error: true,
      message: 'Token is required.',
    });
  }
  // check token that was passed by decoding token using secret
  jwt.verify(token, SECRET, function (err, user) {
    if (err)
      return res.status(401).json({
        error: true,
        message: 'Invalid token.',
      });

    // return 401 status if the userId does not match.
    if (user.userId !== userData.userId) {
      return res.status(401).json({
        error: true,
        message: 'Invalid user.',
      });
    }
    // get basic user details
    var userObj = sessionController.getCleanUser(userData);
    return res.json({ user: userObj, token });
  });
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});
