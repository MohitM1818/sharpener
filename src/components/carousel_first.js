import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const CarouselFirst = () => {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const arr=[
    {
      number: 1,
      heading: " No upfront fees!",
      backgroundColor:'rgba(35,141,201,.1)',
      color:'#238dc9',
    },
    {
      number: 2,
      heading: "Mentors who are pro coders",
      backgroundColor: 'rgba(201,114,34,.1)',
      color:'#c97222'
    },
    {
      number: 3,
      heading:'Live sessions. Multiple Projects. ',
      backgroundColor: 'rgba(201,33,44,.1)',
      color: '#c9212c'
    },
    {
      number:4,
      heading:'Unlimited mock interviews!',
      backgroundColor: 'rgba(87,201,34,.1)',
      color: '#57c922'
    },
    {
      number: 5,
      heading: 'WIPRO powered certificates',
      backgroundColor: 'rgba(172,67,209,.1)',
      color:'#ac43d1'
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
       <div className='theme-div'> 
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
