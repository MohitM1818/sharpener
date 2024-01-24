
import Navbar from './component/navbar';
import Firstsection from './component/First-section';
import { Route, Routes, useLocation } from 'react-router-dom';
import SuccessS from './component/Success-Stories';
import './APP2.css';
import Hire from './component/Hire-superstar';
import  Footer  from './component/footer';
import  Login  from './component/login';
import Signup from './component/signup';
import Admin from './dashboard/admin';
import { useEffect } from 'react';
import Refund from './components/Refund'
import TermsConditions from './components/TermsConditions'
import CoursesRoadmap from './components/CoursesRoadmap';
import ISAsharpener from './components/ISAsharpener';
import FaqSection from './components/faq';
import ColorSlider from './components/ColorSlider';
import './media.css';
function App() {
  const {pathname} =useLocation();
  useEffect(()=>{
    window.scroll(0,0)
  },[pathname])

  return (
    <>
      {/* <Navbar/> */}
     
      <Routes>
        <Route path="/" element={<><Navbar/> <Firstsection/> <Footer/></>}/>
        <Route path="/Success-Stories" element={<><Navbar/> <SuccessS/> <Footer/></>}/>
        <Route path='/Hire-superstar' element={<><Navbar/> <Hire/> <Footer/></>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/Refund' element={<><Navbar/><Refund/><Footer/></>}></Route>
        <Route path='/TermsCondition' element={<><Navbar/><TermsConditions/><Footer/></>}></Route>
        <Route path='/CoursesRoadmap' element={<><Navbar/><CoursesRoadmap/><Footer/></>}></Route>
        <Route path='/ISAsharpener' element={<><Navbar/><ISAsharpener/><ColorSlider/><FaqSection/><Footer/></>}></Route>

      </Routes>
      {/* this  is main  mohit*/}
      {/* <Footer/> */}
    </>
  );
}

export default App;
