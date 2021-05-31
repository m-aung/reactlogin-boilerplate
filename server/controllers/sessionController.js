// generate token using secret from process.env.JWT_SECRET
// var jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

const SessionController = {};
const SECRET = process.env.JWT_SECRET || 'BoilerPlate';
// generate token and return it
SessionController.generateToken = (user) => {
  //1. Don't use password and other sensitive fields
  //2. Use the information that are useful in other parts
  if (!user) return null;

  const { userId, name, username, isAdmin } = user;
  const obj = {
    userId,
    name,
    username,
    isAdmin,
  };

  return jwt.sign(obj, SECRET, {
    expiresIn: 60 * 60 * 24, // expires in 24 hours
  });
};

// return basic user details
SessionController.getCleanUser = (user) => {
  if (!user) return null;
  const { userId, name, username, isAdmin } = user;
  return {
    userId,
    name,
    username,
    isAdmin,
  };
};

export default SessionController;
