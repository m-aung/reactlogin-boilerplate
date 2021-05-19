import React from 'react';
import {  Switch, Route, NavLink} from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Dashboard from './components/Dummy'
const App = () =>{
  return (
    <div className="header">
      <NavLink exact activeClassName='active' to ='/'>Home</NavLink>
      <NavLink activeClassName='active' to ='/login'>Login <smal>Access without token only</smal></NavLink>
      <NavLink activeClassName='active' to ='/signup'>Sign up<smal>Access without token only</smal></NavLink>
      <NavLink activeClassName='active' to ='/dashboard'>My Dashboard<smal>Access with token only</smal></NavLink>
      <NavLink activeClassName='active' to ='/about'>About<smal>Access without token only</smal></NavLink>
      <div className="content">
        <Switch>
          <Route exact path ='/' component = {Home} />
          <Route path ='/login' component = {Login} />
          <Route path ='/signup' component = {Signup} />
          <Route path ='/dashboard' component = {Dashboard} />
          <Route path ='/about' component = {About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;