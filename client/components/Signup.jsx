import React, {useState} from 'react'

const Signup = () => {
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
  const handleSignup = async () => {
    setError(null);
    setTimeout= () => {
      setLoading(true)
    ,1500}
    setLoading(true);
      axios.post(SERVER,{
      username:username.value,password:password.value
    }).then(response => {
      if(!response) return response
      console.log(response.data.token)
      setTimeout= () => {
        setLoading(false)
      ,1100}; // user is logged in
      setUserSession(response.data.token, response.data.user)
      setUser(response.data.user.username)
      props.history.push(`/dashboard?user=${response.data.user.username}`)
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
    <div className="signup-card">
    <h2>Sign up</h2>
    <div className="card-items">
      Username
      <input type="text" {...username} autoComplete="new-password" />
    </div>
    <div className="card-items">
      Password
      <input type="password" {...password} autoComplete="new-password" />
    </div>
    <div className="card-items">
      Confirm Password
      <input type="password" {...password} autoComplete="confirm-password" />
    </div>
    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
    <input type="button" className="btn" value={loading ? 'Loading...' : 'Sign up'} onClick={handleSignup} disabled={loading} />
  </div>
  )
}
export default Signup