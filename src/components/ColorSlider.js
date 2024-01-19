import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function ColorSlider() {
  const [fixed,setFixed]=React.useState(0); 
  const [monthly,setMonthly]=React.useState(0); 
  const [share,setShare]=React.useState(0);
  const [total,settotal]=React.useState(0);

  
function valuetext(value) {
  setFixed(value);
  setMonthly(Math.round(value/12*100000));
  setShare(Math.round(monthly*0.17));
  settotal((pre)=>pre<=300000?share*12:300000);
  return `${value}°C`;
}
  
  return (
    <div className='isa-slider-div'>
      <div className='isa-slider'>
        <h3> Your Base Salary</h3>
    
    <Box sx={{ width: 700 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={7}
        getAriaValueText={valuetext}
        color="warning"
        valueLabelDisplay="auto"
        marks = {false}
        min={0}
        max={25}
        />
    </Box>
    <p>slide the slider to change the CTC</p>
        </div>
              
        <div className='isa-content'>
          <div className='isa-content-top'>
            <div className='top-content-div'>
              <p className='top-content-p'>{fixed} LPA</p>
              <h4 className='top-content-h4'>Fixed Base</h4>
            </div>
            <div className='top-content-div margin-right'>
              <p className='top-content-p' >₹ {monthly}</p>
              <h4>Monthly Salary</h4>
            </div>
          </div>
          <div className='isa-content-bottom'>

          <div className='top-content-div'>
          <p className='top-content-p'>₹ {share}</p>
              <h4 className='top-content-h4'>One month's share*</h4>
            </div>
            <div className='top-content-div margin-right'>
              <p className='top-content-p'>₹ {total}</p>
              <h4>Total Share*</h4>
          </div>
          </div>
        </div>
         
        </div>
  );
}
