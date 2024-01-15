import React from 'react'
import yt from '../Images/yt.png'
import '../Success.css'
import freecharge from '../Images/freecharge.png'
import Slider from "react-slick";
import heart from '../Images/heart.png'
const SuccessS = () => {
  
  const success = [
    {
      h4:'No offers to multiple offers',
      name:'Alok Mourya',
      p:'I focussed on just skills as advised by the mentors and cracked multiple double digit offers!',
      img:'./Image/ansari.png',
      backgroundColor: 'rgb(217, 179, 255)'
    },
    {
      h4:'No offers to multiple offers',
      name:'Akansha',
      p:'I focussed on just skills as advised by the mentors and cracked multiple double digit offers!',
      img:'./Image/ansari.png',
      backgroundColor:'rgb(255, 182, 193)'
    },
    {
      h4:'No offers to multiple offers',
      name:'Manan Shah',
      p:'I focussed on just skills as advised by the mentors and cracked multiple double digit offers!',
      img:'./Image/ansari.png',
      backgroundColor:'rgb(229, 229, 72)'
    },
    {
      h4:'No offers to multiple offers',
      name:'Shafeeq Ali',
      p:'I focussed on just skills as advised by the mentors and cracked multiple double digit offers!',
      img:'./Image/ansari.png',
    backgroundColor: '#c7ffe3'
    },
    {
      h4:'No offers to multiple offers',
      name:'Tushar Singh',
      p:'I focussed on just skills as advised by the mentors and cracked multiple double digit offers!',
      img:'./Image/ansari.png',
      backgroundColor:'rgb(229, 229, 72)'
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease-out"
  };
  return (
    <>
    <main>
    <section className="success-1">
      <h1>Meet Our Brand Ambassadors</h1>
      <Slider {...settings}>
      {success.map((s)=><><div className="success-slider">
        <h4 className="success-head" style={s}>{s.h4}</h4>
        <img src={s.img} alt="ansari" />
        <small className="success-name">{s.name}</small>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path></svg>
        <p className="success-pera">{s.p}</p>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"></path></svg>      
         <div className="success1-bottom">
        <div className="success-small">
          <small>Placed At:</small>
        <img src={freecharge} alt="company name" />
        </div>
        <div className="success-small">
          <small>Watch Testimonial:</small>
        <img src={yt} alt="cs" width='50px' height='50px'/>
        </div>
       </div>
      </div></>)}
      </Slider>
    </section>
    <section className="success-2">
      <div className="s2-head">
        <h2 className="s2-heading">When our students share love</h2>
        <img src={heart} alt="heart" />
      </div>
      <div className="s2-google">
        <div className="google-head ">
          <img src='./Image/google.png' alt="google" />
          <img src="./Image/5star.png" alt="" />
        </div>
        <div className="google-img ">
          <img src="./Image/gr1.png" alt="Review" />
          <img src="./Image/gr2.png" alt="Review" />
          <img src="./Image/gr3.png" alt="Review" />
        </div>
        <div className="google-add ">
          <a href="https://www.google.co.in/">And many more</a>
        </div>
      </div>
      <div className="s2-quora">
        <div className="q-head">
          <img src="./Image/quora.png" alt="Quora" />
        </div>
        <div className="q-mid">
          <div className="mid-left">
            <img src="./Image/qr1.png" alt="" />
            <img src="./Image/qr2.png" alt="" />
          </div>
          <div className="mid-right">
            <img src="/Image/qr3.png" alt="" />
            <img src="/Image/qr4.png" alt="" />
          </div>
        </div>
        <div className="q-bottom">
          <a href="https://www.google.co.in/">Don’t just take our word. Check it online yourself!</a>
        </div>
      </div>
    </section>
    </main>
    </>
  )
}
export default SuccessS