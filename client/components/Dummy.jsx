import React from 'react'
import { getUser, removeUserSession } from '../services/Common';

const Dummy = (props) => {
  const user = getUser();
  const handleLogout = ()=> {
    removeUserSession();
    props.history.push('/')
  }
  return (
    <div>
    Welcome to DashBoard!
    <br/><br/>
    <input type='button' value= 'Logout' onClick={handleLogout}></input>
    </div>
  )
}
export default Dummy