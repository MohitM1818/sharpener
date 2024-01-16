import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const Students = () => {
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
    const studentSlider = [
        {
            image:'./Images/alumni_aditya.jpeg',
            name: 'Aditya',
            work: 'AppScript',
            workHeading: 'Live projects got him offfers',
            href: 'https://www.youtube.com/watch?v=Di5JDrdcZ8o'
        },
        {
            image:'./Images/alumni_amit.jpeg',
            name: 'Amit',
            work: 'Baliza',
            workHeading: 'Layoff to a super offer',
            href:'https://www.youtube.com/watch?v=IEuf8UQThGI'
        },

        {
            image:'./Images/alumni_arun.jpg',
            name: 'Arun',
            work: 'TechPearl',
            workHeading: 'Small college to big carrer',
            href: 'https://www.youtube.com/watch?v=A4mhj5Aqk3U'
        },

        {
            image:'./Images/alumni_prashant.jpeg',
            name: 'Prashant',
            work: 'Acideas Solutions',
            workHeading: 'Support role to react dev',
            href: 'https://www.youtube.com/watch?v=1cpGGIexEI0'
        },

        {
            image:'./Images/alumni_pushkar.png',
            name: 'Pushkar',
            work: 'DVNJ Health Tech',
            workHeading: 'Scrolling insta got him job',
            href: 'https://www.youtube.com/watch?v=SqgYbUSfUrg'
        },

        {
            image:'./Images/alumni_somdutt.jpeg',
            name: 'Somdutt',
            work: 'Dynmasoft',
            workHeading: 'From BA to SDE',
            href: 'https://www.youtube.com/watch?v=fjeZywJZN3I'
        },

        {
            image:'./Images/alumni_udai.jpeg',
            name: 'Udai',
            work: 'Dolcera',
            workHeading: 'Govt. Sec to IT victory',
            href:'https://www.youtube.com/watch?v=xkoDPOm_vZQ'
        }
       
    ]
  return (
    <div className='student-div'>
        <h2 className='where-do'>Where do our students work?</h2>
        <img className='student-yellow' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAABfCAYAAAAAupDMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMqSURBVHgB7dphbts2GAZgUu6PBMNQ5QTzEXbU7QbNDdIbdDfYEbz/A6L9arHK5kh5DmKbjuXUiZ34eYCiKSUxDfC9IfXRIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJy1r6n95f6+bcvXMQAnVwJ51YaP/bcwTWEyjSHlv8M0pNim/HVM8c/YpFl/tfj9JnZdeUZ44QmrUG2Ol5BtjpXQbY6VEG7f9/+zQzDDr3mgjTG0YfvGLk7Sp5Cazz9f//1le244obIN3Bw7SjDWBmMJRrt+X8r/ju3Gw/UQvaYc2KZJdyk0t7XAPia871xt5Zh/D22abxbziHDk4k6bxT02GMN8lWAxyL80vsSU7r5fL25X2+K9zwSOYswKkppc5IvJeqGn1DZxs/j3rx5nu3JwiFmM6dPj99hDvLnwvkJI1ucSkksyqw3mHUiXl8btcJV30piqoUu75srPLBbxnziJs33b4n1OHt7Vtq5s5RYphymH7qHTVuQwLbtuAnOmZrXBlyj46rUcgtr4h9BXx79dhe45q9w5epHwbra9l99ovfU9rGaXG8hZbfBZBR9DV65vzaXg36Sys1wtZGneTMtucZWbXCB386v554OPis4gkLNdF/L3q17L/7/q+GsUfHF93e28xvtRe5Xb1xQcXuNydkoDMKV8XJSzs9XQG3tUdP+1HR68yn/6PkybJnxMsRkmD6swHljw+bkuNtsrSZz33WQSqr/JFTyPjQ7GyD5HtWM+jMfp+m2n65iXznP++W7nP83vntrx6DZfuGM2AMcGY3nrdggu+SjJUdEZ0yVnS9kWN+m3EJo/ntN5flfhPc0HEqwgF6e8Psb6a9/Y/suYT1DtczbhHd0Qe0RI3pAjFPzDVDsajsO1efwr1Cd7d/2XFw2vI6MfdMSCX05Xf+aYBe9Y6fUcHN6zD+RTBX/EDw7sLPhQP1ZS8BzbEN4SyJubritNlb7/MO3/7W8madLmM6Zlk2V4/xsOidt8NPRwbPTSBV/44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8ef8BBjcAU4hVNncAAAAASUVORK5CYII='></img>
        <Slider {...settings}>
        {studentSlider.map((b)=> 
    <div className='student-innerdiv' >
<div className='student-image'>
    <img className='student-image-inner' src={b.image} />  
</div>
<div>
        <div className='student-details-div'>
        <div className='student-details'>
        <b className='black-text'>{b.name}</b>
        <div className='image-text'>
        <img className='youtube-image' src='https://imgs.search.brave.com/wc-KjBYp9_SSSkLSPp567nBgg8wLx-7dVmzT5c3BRdE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg2Lzk5LzIx/LzM2MF9GXzU4Njk5/MjEyN19DU2pZS1li/UXIzZnJPNVRzZnZQ/QlVGaXYxa3ZDUlBM/ci5qcGc'></img> 
   <a href={b.href} className='Watch-now'><small className='black-text '>Watch now</small></a>

        </div>
        <div className='Working-at'>
        <small className='text-color'>Working at</small>
         <p className='black-text'>{b.work}</p></div>
         <div className='small-college text-color'><small>{b.workHeading}</small></div>
         </div >
    </div>
</div>
    </div>
     )}
    </Slider>
    </div>
  )
}
export default Students;
