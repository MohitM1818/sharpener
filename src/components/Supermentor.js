import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 const Supermentor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : false,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  const mentor= [{
    mentorimage:'./Images/abhik das.png',
    name: 'Abhik Das',
    technology: 'Frontend',
    companyimage:'./Images/instahyre.png'
    },
    
    {
      mentorimage:'./Images/sanket.png',
      name: 'Sanket Pawar',
      technology: 'Data Structures',
      companyimage:'./Images/cloudcover.png'
    },

    {
       mentorimage:'./Images/nishant.png',
       name: 'Nishant Choubisa',
       technology: 'Data Structures',
       companyimage:'./Images/sharpenertech.png'
    },

     {
        mentorimage:'./Images/monu.png',
        name: 'Monu Carpenter',
        technology: 'Data Structures',
        companyimage:'./Images/coralmango.png'
      },

      {
        mentorimage:'./Images/manan shah.png',
        name: 'Manan Shah',
        technology: 'Frontend',
        companyimage:'./Images/flexiloans.png'
      },

      {
        mentorimage:'./Images/akash ghule.png',
        name: 'Akash Ghule',
        technology: 'Frontend',
        companyimage:'./Images/tatatechnologies.png'
       },

      {
        mentorimage:'./Images/siva par.png',
        name: 'Siva Prasad',
        technology: 'Backend',
        companyimage:'./Images/yellowai.png'
      },

     {
        mentorimage:'./Images/shubham dangi.png',
        name: 'Shubham Dangi',
        technology: 'Backend',
        companyimage:'./Images/valuefy.png'
     },

      {
        mentorimage:'./Images/reshab.png',
        name: 'Reshab',
        technology: 'Backend',
        companyimage:'./Images/utahtechlabs.png'
       },

     {
        mentorimage:'./Images/kaustubh.png',
        name: 'Kaustubh Bhatter',
        technology: 'Data Structures',
        companyimage:'./Images/directi.png'
      },
                    
      {
        mentorimage:'./Images/vaibhav prasad.png',
        name: 'Vaibhav Prasad',
        technology: 'Data Structures',
        companyimage:'./Images/deshaw.png'
        },    
                        
        {
            mentorimage:'./Images/yash prasad.jpeg',
            name: 'Yash Prasad',
            technology: 'Full Stack',
            companyimage:'./Images/athenahealth.png'
        }

  ]
  return (
    <section className ='supermentor-section'>
    <div>
      <div>
        <h1 className='supermentor-h1'>Know your Super Mentors</h1>
        <img className='student-yellow' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAABfCAYAAAAAupDMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMqSURBVHgB7dphbts2GAZgUu6PBMNQ5QTzEXbU7QbNDdIbdDfYEbz/A6L9arHK5kh5DmKbjuXUiZ34eYCiKSUxDfC9IfXRIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJy1r6n95f6+bcvXMQAnVwJ51YaP/bcwTWEyjSHlv8M0pNim/HVM8c/YpFl/tfj9JnZdeUZ44QmrUG2Ol5BtjpXQbY6VEG7f9/+zQzDDr3mgjTG0YfvGLk7Sp5Cazz9f//1le244obIN3Bw7SjDWBmMJRrt+X8r/ju3Gw/UQvaYc2KZJdyk0t7XAPia871xt5Zh/D22abxbziHDk4k6bxT02GMN8lWAxyL80vsSU7r5fL25X2+K9zwSOYswKkppc5IvJeqGn1DZxs/j3rx5nu3JwiFmM6dPj99hDvLnwvkJI1ucSkksyqw3mHUiXl8btcJV30piqoUu75srPLBbxnziJs33b4n1OHt7Vtq5s5RYphymH7qHTVuQwLbtuAnOmZrXBlyj46rUcgtr4h9BXx79dhe45q9w5epHwbra9l99ovfU9rGaXG8hZbfBZBR9DV65vzaXg36Sys1wtZGneTMtucZWbXCB386v554OPis4gkLNdF/L3q17L/7/q+GsUfHF93e28xvtRe5Xb1xQcXuNydkoDMKV8XJSzs9XQG3tUdP+1HR68yn/6PkybJnxMsRkmD6swHljw+bkuNtsrSZz33WQSqr/JFTyPjQ7GyD5HtWM+jMfp+m2n65iXznP++W7nP83vntrx6DZfuGM2AMcGY3nrdggu+SjJUdEZ0yVnS9kWN+m3EJo/ntN5flfhPc0HEqwgF6e8Psb6a9/Y/suYT1DtczbhHd0Qe0RI3pAjFPzDVDsajsO1efwr1Cd7d/2XFw2vI6MfdMSCX05Xf+aYBe9Y6fUcHN6zD+RTBX/EDw7sLPhQP1ZS8BzbEN4SyJubritNlb7/MO3/7W8madLmM6Zlk2V4/xsOidt8NPRwbPTSBV/44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8ef8BBjcAU4hVNncAAAAASUVORK5CYII='></img>
      </div>
      <Slider {...settings}>
      {mentor.map((d)=>
        <div className='supermentor-slide'>
          <div className='mentor-image'>
            <img className='student-image-inner'src={d.mentorimage}></img>
        </div>
         
          <div className='mentor-details'>
          <div className='mentor-details-div'>
            <b className='black-text'>{d.name}</b>
            <small className='text-color'>{d.technology}</small>
          </div>
         
          <img className='company-image' src={d.companyimage}></img>
        
        </div>
      </div>
      )}
     </Slider>
    </div>
    </section>
  )
}
export default Supermentor;
