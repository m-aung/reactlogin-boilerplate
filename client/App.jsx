import React, {useState, useEffect} from 'react';
import { Switch, Route, NavLink} from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Dashboard from './components/Dummy'

import { getToken, removeUserSession, setUserSession } from './services/Common';
const App = () =>{
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response => {
      // if(!response) return response;
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className="App">
      <div className="header">
        <NavLink exact activeClassName='active' to ='/'>Home</NavLink>
        <NavLink exact activeClassName='active' to ='/'>Home</NavLink>
        <NavLink activeClassName='active' to ='/login'>Login </NavLink>
        <NavLink activeClassName='active' to ='/signup'>Sign up</NavLink>
        <NavLink activeClassName='active' to ='/dashboard'>My Dashboard</NavLink>
        <NavLink exact activeClassName='active' to ='/*'>CODE 404 Not Found</NavLink>
        <NavLink activeClassName='active' to ='/about'>About</NavLink>
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