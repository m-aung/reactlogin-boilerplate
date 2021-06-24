import React from 'react'
import {Link} from 'react-router-dom'
import { getUser, removeUserSession } from '../services/Common';

import Login from './Login'

const Dummy = (props) => {
  console.log('username:', props.user)
  const handleLogout = ()=> {
    removeUserSession();
    props.logout('')
    props.history.push('/')
  }
  const handleLogin = () =>{
    props.history.push('/login')
  }
  return (
    <div className="context">
    Welcome to DashBoard {props.user}!
    <hr/>
    {
      props.user ? 
      <input type='button' value= 'Logout' onClick={handleLogout}/>:
      <input type='button' value= 'Login' onClick={handleLogin}/>
    }
    </div>
  )
}
export default Dummy