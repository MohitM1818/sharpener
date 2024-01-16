import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 const Slickapp = () => {
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
        return (<>
          <div className="App">
          <div className="first-div">
    
         <h2 className="heading"> Outstanding Reviews!</h2>
         <div className="second-div" >
        
            <img  className="google-logo" src="https://imgs.search.brave.com/vEvuTP37ru8J1U7J-0ZMEx6Kj2jBelFi5iXcRTtHp4o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L2dvb2dsZV9sb2dv/LTY2N3g0MDAucG5n"alt="Google.logo"></img>
         </div>
         <div>
          <h3 className="rating">4.95</h3>
          <img className="reviews" src ="https://imgs.search.brave.com/k4rpTFXfo_d1yhmjpqHQTFtyX4LgiuUUcFXCS8fYqn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzYvR29s/ZGVuLTUtU3Rhci1S/YXRpbmctUE5HLnBu/Zw" alt="google.reviews"></img>
         </div>
          </div>
         <div className="review-div">
         
          <div className="review-details">
            
          <Slider {...settings}>
          <div className="review-google">
          <img className="review-logo-quora" src="https://imgs.search.brave.com/VOcXhZm4r0s3BaRlQiJaV7cbGSrbEUDeLzNOI8XPZSs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQxYzcwNGE2NTE1/YjFlMGFkNzVhYWIu/cG5n" alt="logo"></img>
          <span>Saurabh Kumar</span>
          <span>Here is the review of Saurabh Kumar.</span>
          <a href='https://www.quora.com/What-are-your-reviews-of-pay-after-placement-of-Sharpener-sharpener-tech/answer/Saurabh-Kumar-1736?ch=10&oid=378578421&share=d28c2ab8&srid=GfLnV&target_type=answer'>Read review..</a>
          </div>
    
          <div className="review-google">
          <img className="review-logo-google" src="https://imgs.search.brave.com/Hw0fgPqodZAvLUkDoHx6Qgvz7s1GR-tAFikkqKMoed4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTEyOC5wbmc" alt="logo"></img>
         <span>Raman Aggarwal</span>
         <span>Here is the review of Raman Aggarwal.</span>
         <a href='https://www.google.com/maps/reviews/@21.0680074,82.7525294,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURwdnZDTlFREAE!2m1!1s0x0:0x162644cb5c191281?hl=en-US&entry=ttu'>Read review...</a>
        </div>
        
          <div className="review-google">
           <img className="review-logo-quora" src="https://imgs.search.brave.com/VOcXhZm4r0s3BaRlQiJaV7cbGSrbEUDeLzNOI8XPZSs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQxYzcwNGE2NTE1/YjFlMGFkNzVhYWIu/cG5n" alt="logo"></img>
          <span>Aakriti Yadav</span>
          <span>Here is the review of Aakriti Yadav.</span>
          <a href='https://www.quora.com/What-are-your-reviews-of-pay-after-placement-of-Sharpener-sharpener-tech/answer/Aakriti-Yadav-50?ch=10&oid=1477743630150266&share=97eec902&srid=GfLnV&target_type=answer'>Read review..</a>
          </div>

          <div className="review-google" >
          <img className="review-logo-google" src="https://imgs.search.brave.com/Hw0fgPqodZAvLUkDoHx6Qgvz7s1GR-tAFikkqKMoed4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTEyOC5wbmc" alt="logo"></img>
         <span>Aman Tiwari</span>
         <span>Here is the review of Aman Tiwari.</span>
         <a href='https://www.google.com/maps/reviews/@21.0680074,82.7525294,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNKeHBLQV9nRRAB!2m1!1s0x0:0x162644cb5c191281?hl=en-US&entry=ttu'>Read review...</a>
            </div>
        </Slider>
          </div>
          
         </div>
        
         
    </div>
    
        </>
      );
    }
    export default Slickapp;
