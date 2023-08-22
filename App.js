import logo from './logo.svg';
import imageSrc from 'file:///C:/Users/kavitha.jeyaraj/Downloads/SmartCV-logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';
import React, { useState } from "react";


function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


    const navigate = useNavigate();
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/Home")
        
      }
    } else{
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    } 
    
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form-c">
          <form onSubmit={handleSubmit}>
    
          <div class="input-group" name="UserName">
        <div class="input-icon-container">
          <i class="fa fa-user"></i>
          <input placeholder='User Name' type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        </div>
    
        <div class="input-group" name="UserName">
        <div class="input-icon-container">
          <i class="fa fa-lock"></i>
          <input placeholder='Password' type="password" name="pass" required/>
          {renderErrorMessage("pass")}
        </div>
        </div>
            <div className="button-container">
              <input type="submit" value='Log In'/>
            </div>
            <h4 className='forgotpw'><a>Forgot Password?</a></h4>
          </form>
        </div>
  );

  return (
    
    <div className="app">
      <div className="login-form">
        <div className="title">
          <img src={imageSrc} className="App-logo" alt="logo" />
          </div>
          <h2 className='Logintext'>Log in to your account</h2>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <div className='signalign'>< h3 className='createacc'>Don't have an account?</h3><a className='signup'>Sign up</a></div>
      <h5 className='copyright'>Copyright © 2023, All rights reserved. Rencata.com</h5>
    </div>
    
    
  );
}
export default App;