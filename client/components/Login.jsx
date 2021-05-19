import React, {useState} from 'react'
const Login = props => {

  // Error Handling
  // global login error
  const [error, setError] = useState(null);
  // is data loaded
  const [loading, setLoading] = useState(false)
  // username
  const [username, setUsername] = useState('');
  // password
  const [password, setPassword] = useState('');
  //onChange for username and password function
  const handleInputChange = e => {
    const {id, value} = e.target;
    if(id === 'username') setUsername(value)
    else {
      setPassword(value)
    }
  }
  //login on submit
  const handleLogin = () => {
    props.history.push('/dashboard')
  }

  return (
    <div>
    Login
    <br />
    <br />
    <div>
    <label>Username</label>
    <br/>
    <input type ='text' placeholder ='john135@gmail.com' id ='username' value ={username} onChange = {handleInputChange}></input>
    </div>
    <div>
    <label>Password</label>
    <br/>
    <input type ='password' id ='password'value ={password} onChange = {handleInputChange}></input>
    </div>
    {error && <div className="error">{error}</div>}
    <input type="button" value={loading ? "Loading...": "Login"} disabled={loading} onClick ={handleLogin}
    />
    </div>
  )
}
export default Login;