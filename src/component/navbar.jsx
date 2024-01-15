import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sharpnerlogo from '../Images/sharpnerLogo.png'

 const Navbar = () => {
  const navigate=useNavigate();
  function logoevent(){
    navigate('/')
  }
  return (<>
  <header>
    <div className='navbar'>
        <div className="navlogo" onClick={logoevent} >
            <img className='navimage' src={sharpnerlogo} alt="Sharpner-logo" />
            <p className="navname text-gred">SHARPNER</p>
        </div>
        <div className="navcenter">
          <ul id='navul'>
            <li className="navli"><Link to="/">Home</Link></li>
            <li className="navli"><Link to="/Success-Stories">Success Stories</Link></li>
            <li className="navli"><Link to="/Hire-superstar">Hire Superstar</Link></li>
          </ul>
        </div>
        <div className="navlogin">
          <a id='navlog' href="/login" target='_blank'>Login</a>
        </div>
    </div>
    </header>
    </>
  )
}
export default Navbar