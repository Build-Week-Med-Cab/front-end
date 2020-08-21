import React, {useState} from "react";
import axios from 'axios';
import loginImg from './weed.svg'
import "./style.scss";



export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  // const [login, setLogin] = useState({
  //   username: '',
  //   password: ''
  // })

  // const handleChange = (e) => {
  //   setLogin({
  //     ...login,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(login)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //   .post('https://medcabinet-ds-0820.herokuapp.com/labels/api/auth/register', login)
  //   .then(res => {
  //     console.log(res);
  //     window.localStorage.setItem('token', res.data.payload)
  //   })
  

  render() {
    
    return (
      <div className="base-container">
        <form></form>
        <div className="header">Login</div>
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
                  // value={login.username}
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
                  // value={login.password}
                  // onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">Login</button>
          </div>
          <form/>
      </div>
    )};
  
};
