import React from 'react'
import logo from '../Images/sharpnerLogo.png'
import right1 from '../Images/login-right1.png'
import right2 from '../Images/login-right2.png'
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState(" ");
    const [message, setMessage] = useState(" ");
    function handleEmail(event) {
        let inputValue = event.target.value;
        setEmail(inputValue);
    
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(inputValue)) {
          setMessage("Error! you have entered invalid email.");
        } else {
          setMessage("");
        }
      }
      function showpass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }
  return (
    <div className='login-page'>
        <div className="login-form">
            <div className="login-left">
                <form>
                    <div className="login-logo">
                    <img src={logo} alt="sharpener logo" />
                </div>
                <div className="form">
                    <div className="form-top">
                        <div>
                            <p className='pera-login'>Login</p>
                            <p>Sharpenerians in the house!</p>
                        </div>
                    </div>
                    <div className="form-input">
                        <div className="input-1">
                            <p className="input1-head">Email </p>
                            <div className="input-area">
                                <div className='svg-div'>
                                <svg  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                                <input type="email" value = {email} onChange = {handleEmail} required/>
                            </div>
                            <p className='mail-pera'>{message}</p>
                            </div>
                        </div>
                        <div className="input-1">
                             <p className="input1-head">Password</p>
                            <div className="input-area">
                                <div className='svg-div'>
                                <svg  aria-hidden="true" viewBox="0 0 24 24" data-testid="GppGoodOutlinedIcon"><path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z"></path></svg>                                
                               <input type='password' id='password' minLength='8' required/>
                               <button className='i-button' type='button'>
                              <span className='form-span' onClick={showpass}><svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg></span>  
                                </button>
                                </div>
                            </div>
                            </div>
                        {/* <div className="input-3">
                            <a href="/" className='text-gred' >Forgot password?</a>
                        </div> */}
                        <div className="input-4">
                            <button type='submit'>Login</button>
                        </div>
                        <div className="input-5">
                        Don't have an account? <a href="/signup" target='_self' className='text-gred'>Sign up</a>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            <div className="login-right">
                <div className="lr-big">
                    <div className="lr-small">
                        <div className="right-1">
                            <h4>Want to become a professional software developer?</h4>
                        </div>
                        <div className="right-2">
                            <ul>
                           <li>Learn from the best coders in India</li>
                           <li>Get referred to top product companies</li>
                           <li>Gamified learning.</li>
                           <li>Learn with ease: Live sessions + recorded theories</li>
                            </ul>
                        </div>
                        <div className="right-3">
                            <img src={right1} alt="right" />
                            <img src={right2} alt="right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login
