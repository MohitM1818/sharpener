import React from 'react'

const Highpower = () => {
    const cardarr = [
        {
            heading:"Frontend Development",
            duration: "4 months"

        },
        {
            heading: "Backend Devlopment",
            duration: "4 months"
        },
        {
            heading: "Fullstack Development",
            duration:"6 months"
        }
    ]
  return (
    <div className='highpower'>
        <h2>High Power Courses</h2>
        <p>Extremely hands-on and accelerated courses with a quality-first approach</p>
        <div className='courses-div'>
           { cardarr.map((c)=>
        <div className='card'>
            <div className='card-content'>
                <h2 className='card-title'>{c.heading}</h2>
                <div className='card-body'>
                    <p><span>Duration : </span>
                        {c.duration}
                    </p>
                    <p><span>Eligibility : </span>
                     Any final year student or degree holder
                    </p>
                    <p><span>Pay After Placement : </span>
                    <svg  className='card-svg'stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{color: "lightgreen;"}}><path d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path></svg>
                     </p>
                </div>
                <div> <button className='courses-button'>Explore</button></div>

            </div>
        </div>
            )}
        


        </div>
    </div>
  )
}
export default Highpower;
