import React, {useState} from "react";
import axios from 'axios';

const SignUp = (props) => {
  const [signUp, setSignUp] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    })
    console.log(signUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://medcabinet-ds-0820.herokuapp.com/labels/api/auth/register', signUp)
    .then(res => {
      console.log(res);
      window.localStorage.setItem('token', res.data.payload)
      props.history.push('/WebApp')
    })
  }


  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <h2>User Name</h2>
      <input
      type="text"
      name="username"
      label="username"
      value={login.username}
      onChange={handleChange}
      className="input"
      >
    </input>

    <h2>Password</h2>
      <input
      type="text"
      name="password"
      label="password"
      value={login.password}
      onChange={handleChange}
      className="input"
      >
    </input>
    <button>Login</button>

    </form>
    


   </>

  );
};

export default SignUp;