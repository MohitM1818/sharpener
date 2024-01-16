import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const CarouselFirst = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  const arr=[
    {
      number: 1,
      heading: " No upfront fees!",
      backgroundColor:'#238dc9'
    },
    {
      number: 2,
      heading: "Mentors who are pro coders",
      backgroundColor: '#c97222'
    },
    {
      number: 3,
      heading:'Live sessions. Multiple Projects. ',
      backgroundColor: '#c9212c'
    },
    {
      number:4,
      heading:'Unlimited mock interviews!',
      backgroundColor: '#57c922'
    },
    {
      number: 5,
      heading: 'WIPRO powered certificates',
      backgroundColor: '#ac43d1'
    }
    
  ]
  return (
    <section>


      <h1 className='WhySharpnerIs'>Why Sharpner is 
        <span className='fivexbetter text-color'> 5x better?</span>
      </h1>
    <div  className='div_here '>
      <Slider {...settings}>

      {arr.map((a)=> 
       <div> 
      <div className='theme1' style={a}>
     <p className='theme1_1' >{a.number}</p>
      <div><h1 className='no_upfront_fees'>{a.heading} </h1></div>
      </div>
      
       </div>
      
      )}
      </Slider>
      </div> 
      

    </section>
  )
}
export default CarouselFirst;  
