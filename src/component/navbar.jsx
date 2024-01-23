import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sharpnerlogo from '../Images/sharpnerLogo.png'

 const Navbar = () => {
  const navigate=useNavigate();
  function logoevent(){
    navigate('/');
  }
    function showsidebar(){
      const sidebar=document.querySelector('.sidebar')
      sidebar.style.display = 'flex'

    }
    function hidesidebar(){
      const sidebar=document.querySelector('.sidebar')
      sidebar.style.display = 'none'
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
          <Link id='navlog' to="/login" >Login</Link>
        </div>
      <svg className='showsidebar' onClick={showsidebar} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        
        <ul className="sidebar">
          <li onClick={hidesidebar}><svg  className='menu-close' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
          <li className="navli"><Link to="/">Home</Link></li>
            <li className="navli"><Link to="/Success-Stories">Success Stories</Link></li>
            <li className="navli"><Link to="/Hire-superstar">Hire Superstar</Link></li>
            <li className='navli'><Link to="/login" >Login</Link></li>
        </ul>
    </div>
    </header>
    </>
  )
}
export default Navbar