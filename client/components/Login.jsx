import React from 'react'
const Login = () => {
  

  return (
    <div>
    Login
    <br />
    <br />
    <div>
    <label>Username</label>
    <br/>
    <input type ='text' placeholder ='john135@gmail.com'></input>
    </div>
    <div>
    <label>Password</label>
    <br/>
    <input type ='password'></input>
    </div>
    <br/>
    <input type="button" value="Login" />
    </div>
  )
}
export default Login;