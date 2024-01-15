import React from 'react'
import certificate from "../Images/certificate.png"
const Certificate =()=> {
  return (
    <section className="certi-section">
        <div className="certi-container">
        <div className="certi-certi">
            <img src={certificate} alt="certificate"  />
        </div>
        <div className="certi-part2">
            <div className="certi-smalldiv">
                <h2 className="certi-h2">A <span>certificate</span> to flaunt, powered by <span>WIPRO Dice QR code</span> and backed by <span>NASSCOM!</span></h2>
                <div className="certi-pera">
                    <p className="certi-pera1">Sharpener is proud to partner with WIPRO and NASSCOM to generate certificates that have a WIPRO Dice QR code, which WIPRO and their partners see as a trademark of trust.</p>
                    <p className="certi-pera2">A unique QR code will store your skill details and certificate.</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}
export default Certificate
