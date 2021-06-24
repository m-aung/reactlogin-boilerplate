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
  const [user, setUser] = useState('')

  const login = async (data = null) => {
    setUser(data)
  }
  const logout = async() => {
    setUser('')
  }
  const test = 'testing'
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response => {
      // if(!response) return response;
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
      setUser(response.data.user)
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
        <NavLink activeClassName='active' to ='/login'>Login </NavLink>
        {
          user ? 
          <NavLink activeClassName='active' to ={`/dashboard?user=${user}`}>My Dashboard</NavLink>:
          <NavLink activeClassName='active' to ='/signup'>Sign up</NavLink>
        }
        <NavLink activeClassName='active' to ='/about'>About</NavLink>
      </div>
        <div className="content">
          <Switch>
            <Route exact path ='/' component={Home} user={user} />
            <Route path ={'/login'} render={(props)=> (
              <Login
              {...props}
              login={login}
              />
            )}/>
            <Route path ='/signup' render={(props)=> (
              <Signup
              {...props}
              login={login}
              />
            )} />
            <Route exact path={`/dashboard?user=${user}`} render={(props)=> (
              <Dashboard
              {...props}
              user={user}
              logout={logout}
              />
            )} />
            <Route path ='/about' component = {About} />
          </Switch>
        </div>
    </div>
  );
}

export default App;