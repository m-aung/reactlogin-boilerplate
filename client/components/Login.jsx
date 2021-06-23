import React, {useState} from 'react';
import axios from 'axios';
import { setUserSession } from '../services/Common';


const Login = props => {
  const SERVER = 'http://localhost:3000/users/signin';

  //onChange for username and password function
  const handleInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  // Error Handling
  // global login error
  const [error, setError] = useState(null);
  // is data loaded
  const [loading, setLoading] = useState(false)
  
  // username
  const username = handleInput('');
  // password
  const password = handleInput('');
  
  //login on submit
  const handleLogin =  () => {
    setError(null);
    setLoading(true);
      axios.post(SERVER,{
      username:username.value,password:password.value
    }).then(response => {
      if(!response) return response
      console.log('from line 41')
      console.log(response.data.token)
      setLoading(false); // user is logged in
      setUserSession(response.data.token, response.data.user)
      props.history.push('/dashboard')
      return
    }).catch(err=>{
      setLoading(false);
      // if(error.response.status = 401 ){
      //   setError(error.response.data.message);
      // }
      // else{
        console.log('from fetch error: ', err)
        setError('Something went wrong. Please try again later.');
      // }
    })
    // props.history.push('/dashboard')
  }

  return (
    <div className="login-card">
    Login<br /><br />
    <div className="card-items">
      Username<br />
      <input type="text" {...username} autoComplete="new-password" />
    </div>
    <div className="card-items">
      Password<br />
      <input type="password" {...password} autoComplete="new-password" />
    </div>
    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
  </div>
  )
}

export default Login;
