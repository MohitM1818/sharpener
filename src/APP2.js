

import './App.css';
import  CarouselFirst  from './components/carousel_first';
import Slickapp from './components/slickapp';
import Students from './components/Students';
import Whytrustus from './components/whytrustus';
import Highpower from './components/highpower';
import Supermentor from './components/Supermentor';
import FaqSection from './components/faq';
import SharpenerWorks from './components/SharpenerWorks';

// function App() {

//     return (<></>
function App() {
  return (
    <>
      {/* <Navbar/> */}
     
      {/* <Footer/> */}\

     <Slickapp/> 
    <CarouselFirst/>
    <Students/>
    <Whytrustus/>
    <Highpower/>
    <SharpenerWorks/>
    <Supermentor/>
    <FaqSection/>
    </>
  );
}

export default App;
