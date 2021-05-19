import React from 'react';
import { Switch, Route, NavLink} from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Dashboard from './components/Dummy'
const App = () =>{
  return (
    <div className="App">
      <div className="header">
        <NavLink exact activeClassName='active' to ='/'>Home</NavLink>
        <NavLink activeClassName='active' to ='/login'>Login <small>Access without token only</small></NavLink>
        <NavLink activeClassName='active' to ='/signup'>Sign up<small>Access without token only</small></NavLink>
        <NavLink activeClassName='active' to ='/dashboard'>My Dashboard<small>Access with token only</small></NavLink>
        <NavLink activeClassName='active' to ='/about'>About<small>Access without token only</small></NavLink>
      </div>
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