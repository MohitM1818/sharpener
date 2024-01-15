import React, { useState } from 'react'
import tic from '../Images/tic.png'
import { Slidebar } from './Slidebar'
import ISA from './ISA'
import  Certificate  from './Certificate'
const Firstsection = () => {


     const College=[<div>
     <h2>For college passout</h2>
     <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>No <span className='text gred'>upfront fees.</span> Pay only after you get a job. Guaranteed!</small>
   </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>World's <span className='text-gred'>cheapest Pay After Placement model.</span></small>
  </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>Open for all! No batches. Control your learning style!</small>
   </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>Unlimited mock interviews</small>
   </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small> <span className='text-gred'>WIPRO and NASSCOM certifications for free!</span></small>
     </div>
     
            <div className="pf-register">
              <a id='register' href="/signup" target='_blank'>Register</a>
              <p className='pf-p'>As a college passout</p>
            </div>
     </div>,
     <div>
          <h2>For college student</h2>
     <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>No <span className='text gred'> fees.</span>No payments.Open for all!</small>
   </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>Course designed by <span className='text-gred'>actual developers!</span></small>
  </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small><span className="text-gred">Wipro and NASSCOM certification for free</span></small>
   </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small><span className="text-gred">Guaranteed Internship!</span></small>
   </div>
   <div className="pf-pera">
     <img src={tic} alt="tic" />
     <small>Add-ons: Unlimited mock interviews and live classes</small>
     </div>
     
            <div className="pf-register">
              <a id='register' href="/signup" target='_blank'>Register</a>
              <p className='pf-p' >As a college student</p>
            </div>
     </div>
  ]
  var bgc='linear-gradient(180deg,#eafee8,#fef4e8)';
  var bg='linear-gradient(#fff,#fff)';
  const[Value,setValue]=useState(College[0])
  const[bgcolor,setbgcolor]=useState(bgc)
  const[bg2,setbg2]=useState(bg)
  
  const collegeP=(e)=>{
    return (setValue(College[0]),
    setbgcolor(bgc),
    setbg2(bg)
    )}
    const collegeS=()=>{
      return( setValue(College[1]),
       setbg2(bgc),
       setbgcolor(bg)
      )
      }
  
  return (
    <>
    <main>
      <section className='first-section'>
        <div className='fsection'>
        <div className="section1">
          <div className="fs-heading1">
            <h1 className='fs-heading1-h'>Learn full stack development</h1>
            <p className='fs-heading-p'><span className='text-gred'>₹ 0 fees.</span> Upskills for free</p>
            <div className="fs-heading1-option">
               <button className='college-passout ' onClick={collegeP} style={{background:bgcolor}}>I am a <span className='college-passout-span' >College passout</span></button>
              <button className='college-passout' onClick={collegeS} style={{background:bg2}}>I am a <span className='college-passout-span' >College student</span></button>
              </div>
          </div>
          <div>{Value}</div>
          
    {/* <small>Open for all! No batches. Control your learning style!</small>
  </div>
  <div className="pf-pera">
    <img src={tic} alt="tic" />
    <small>Unlimited mock interviews</small>
  </div>
  <div className="pf-pera">
    <img src={tic} alt="tic" />
    <small> <span className='text-gred'>WIPRO and NASSCOM certifications for free!</span></small>
   */}
        </div>
        <div className="section2">
        <Slidebar/>
        </div>
        </div>
        </section>
     
        <ISA/>
        <Certificate/>
        </main>
    </>
  )
}
export default Firstsection
