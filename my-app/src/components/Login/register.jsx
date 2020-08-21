import React, {useState} from "react";
import axios from 'axios';
import loginImg from './weed.svg'
import "./style.scss";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
 

      // const [signUp, setSignUp] = useState({
      //   username: '',
      //   password: ''
      // })
    
      // const handleChange = (e) => {
      //   setSignUp({
      //     ...signUp,
      //     [e.target.name]: e.target.value
      //   })
      //   console.log(signUp)
      // }
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   axios
      //   .post('https://medcabinet-ds-0820.herokuapp.com/labels/api/auth/register', signUp)
      //   .then(res => {
      //     console.log(res);
      //     window.localStorage.setItem('token', res.data.payload)
      //   })
      
    
    return (
      <div className="base-container">
        <form></form>
        <div className="header">Register</div>
          <div className="content">
            <div className="image">
            <img src={loginImg} />
  
  
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  label="username"
                  // value={signUp.username}
                  // onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  label="password"
                  // value={signUp.password}
                  // onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">Register</button>
          </div>
          <form/>
      </div>
    )}
  }
