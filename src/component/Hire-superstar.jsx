import React from 'react'
import ryan from '../Images/hire.png'
import '../hire.css'
import sec2 from '../Images/sec2img.png'
import sec3 from '../Images/sec3img.png'
const Hire = () => {
  return( <>
  <main>
    <section className="hire-sec1">
        <div className="sec1-main">
            <article className='main-left'>
                <h1 className="left-h1">Hire <span className="text-gred">Top 1% Techies</span> at absolutely <span className="text-gred">No cost</span></h1>
                <h2 className="left-h2">Sharpener has a quality-first approach.</h2>
                <h3 className="left-h3">Our students profiles will only be shared with you if we find them ready. No compromises.</h3>
                <button className="mainhire-button">Hire At No Cost</button>
            </article>
            <article className="main-right">
                <img src={ryan} alt="" />
                <h4 className="ryan-h">~ Ryan, CEO, Edutap</h4>
                <p className="ryan-pera">We were looking for Backend and Frontend developers with 1-2 years of experience, but it was a mess! Long notices, offer shopping or lack of skills. On interviewing Sharpener students, I found freshers who were better than experienced folks, and immediate joiners. I hired in not weeks but days! Saved my time and money!

</p>
            </article>
        </div>
    </section>
    <section className="hire-sec2">
        <h2 className="sec2-h2">We filter down the best!</h2>
        <img src={sec2} alt="data" />
    </section>
    <section className="hire-sec3">
        <article className="sec3-article">
            <h2 className="sec3-h2">What kind of students do we have?</h2>
            <div className="article-div">
                <img src={sec3} alt="" />
                <div className="article-6div">
                    <div className="sec3-smalldiv">
                        <h3 className="text-gred">100+ Hours</h3>
                        <p className="smalldiv-pera">Of Coding Experience</p>
                    </div>
                    <div className="sec3-smalldiv">
                        <h3 className="text-gred">Highly Trained</h3>
                        <p className="smalldiv-pera">By Industry Professionals</p>
                    </div>
                    <div className="sec3-smalldiv">
                        <h3 className="text-gred">Great projects</h3>
                        <p className="smalldiv-pera">With Rich Github Repos</p>
                    </div>
                    <div className="sec3-smalldiv">
                        <h3 className="text-gred">100+ Hours</h3>
                        <p className="smalldiv-pera">Of Competitive Coding</p>
                    </div>
                    <div className="sec3-smalldiv">
                        <h3 className="text-gred">Exams Perfected</h3>
                        <p className="smalldiv-pera">To ensure genuineness</p>
                    </div>
                    <div className="sec3-smalldiv">
                        <h3 className="text-gred">125+</h3>
                        <p className="smalldiv-pera">Leetcode solutions</p>
                    </div>
                </div>
            </div>
        </article>
    </section>
    <section className="hire-sec4">
        <div className="sec4-div">
            <h2 className="sec4-h2">Don’t compromise. Hire from Sharpener for free!</h2>
            <form action="">
                <h3 className="form-h3">Let's Build a Relation</h3>
                <div className="label-div">
                    <label for='full-name'>
                        <input type="text" required id='full-name' placeholder='Full name' />
                    </label>
                    <label for='number'>
                        <input type='tel' required id='number' placeholder='Phone number' />
                    </label>
                </div>
                <div className="label-div">
                    <label for='company'>
                        <input type="text" required id='company' placeholder='Company' />
                    </label>
                    <label for="designation">
                        <input type='text' required id='designation' placeholder='Designation' />
                    </label>
                </div>
                <label for="company-name">
                    <input type="text" required id='company-name' placeholder='Company name'/>
                </label>
                <button>Hire for free</button>
            </form>
        </div>
    </section>
  </main>
  </>
  )
}

export default Hire