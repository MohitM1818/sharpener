
import Navbar from './component/navbar';
import Firstsection from './component/First-section';
import { Route, Routes } from 'react-router-dom';
import SuccessS from './component/Success-Stories';
import './App.css';
import Hire from './component/Hire-superstar';
import  Footer  from './component/footer';
import  Login  from './component/login';
import Signup from './component/signup';
import Admin from './dashboard/admin';
function App() {
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
      </Routes>
      {/* this */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
