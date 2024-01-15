import React from 'react'
import { useState } from 'react'
import logo from '../Images/sharpnerLogo.png'
import right1 from '../Images/login-right1.png'
import right2 from '../Images/login-right2.png'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [email, setEmail] = useState("ss@f.com");
    const [message, setMessage] = useState(" ");
    const adminpanel = useNavigate();
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
      function Dashboard(even){
             var y = even.target.value;
             if(y==="Admin"){
                adminpanel('/admin')
             }else{
                adminpanel('/admin')
             }
      }
  return (
    <div className='login-page signup-page'>
        <div className="login-form">
            <div className="login-left signup-left">
                <form className='signup-form'>
                    <div className="login-logo">
                    <img src={logo} alt="sharpener logo" />
                </div>
                <div className="form">
                    <div className="form-top">
                        <div>
                            <p className='pera-login'>Sign up</p>
                            <p>Every journey has a beginning.</p>
                        </div>
                    </div>
                    <div className="form-input">
                    <div className="input-1">
                            <p className="input1-head">Name</p>
                            <div className="input-area">
                                <div className='svg-div'>
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonOutlineOutlinedIcon"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>                       
                                <input type="text" required/>
                            </div>
                            </div>
                        </div>
                        <div className="input-1">
                            <p className="input1-head">Email </p>
                            <div className="input-area">
                                <div className='svg-div'>
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                                <input  type='email' value = {email} onChange = {handleEmail} required/>
                            </div>
                            <p className='mail-pera'>{message}</p>
                            </div>
                        </div>
                        <div className="input-1">
                             <p className="input1-head">Password</p>
                            <div className="input-area">
                                <div className='svg-div'>
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GppGoodOutlinedIcon"><path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z"></path></svg>                                
                               <input type="password" minLength='8' id='password' required/>
                               <button className='i-button' onClick={showpass} type='button'>
                              <span className='form-span' ><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg></span>  
                                </button>
                                </div>
                            </div>
                            </div>
                            <div className="input-1">
                            <p className="input1-head">Role</p>
                            <div className="input-area">
                                <div className='svg-div'>
                                <input id='role1' list="role"/>
                           <datalist id="role">
            <option value="User" />
            <option value="Admin" />
        </datalist>
                            </div>
                            </div>
                        </div>
                        <div className="input-4">
                            <button onClick={Dashboard} type='submit'>Sign up</button>
                        </div>
                        <div className="input-5">
                        Already have an account? <a href="/Login" target='_self' className='text-gred'>Login </a>
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
export default Signup
