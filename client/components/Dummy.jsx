import React from 'react'
const Dummy = (props) => {
  const handleLogout = ()=> {
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
export default Dummy;