import React from 'react'
import logo from '../Images/sharpnerLogo.png'
import { Link } from 'react-router-dom'
 const Footer = () => {
  return (
    <footer>
        <div className='main-footer'>
            <div className="footer-div">
                <div className="footer-top">
                    <div className="footer-address">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                            <h2>Sharpener</h2>
                        </div>
                            <ul>
                                <li>No 38/1, Laxmipura, Vaderahalli</li>
                                <li>Sakalvara Road Anekal, Taluk</li>
                                <li>Bengaluru, Karnataka (560083)</li>
                            </ul>
                    </div>
                    <div className="footer-right">
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="/Success-Stories" target='_blank'>Success Stories</a></li>
                                <li><Link to='/Hire-superstar'>Hire With Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-support">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="/">Refund Policy</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>Copyright © 2024 Sharpnerium Private Limited</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer