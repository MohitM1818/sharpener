import React from 'react'

 const FaqSection = () => {
    const queans = [
        {
            question: "What is Sharpener?",
            answer:"Sharpener is all about making learning fun and addictive. Our objective is that just like how games can get addictive, even learning should. In this process, you upskill and crack AMAZING job offers.",
        },
        {
            question:"What is Pay After Placement?",
            answer:"It is simple. Pay after you get a job. We have taken it one level deeper, ensuring you pay only after you start earning. This ensures you don’t hurt your pockets",
        },
        {
            question:"Why Sharpener and not other platforms?",
            answer:"Our testimonials speak for themselves. We are much much more affordable. We do NOT spoon feed students. Be ready to work hard! We have a 100% placement record for students that complete our courses.",
        },
        {
            question:"How can I trust you? Lot’s of scammy programs online!",
            answer:"I agree. Hence we allow you 14 days to explore our platform. It is also the period wherein we see if you are serious about the program. Only after these 14 days, if you qualify and are happy with us, you sign the ISA. Else don’t!",
        }
    ]
  

   
  return (
    <section className='faq-section'>
    <div>
        <h1 className='black-text faq-heading'>Frequently Asked Questions</h1>
        <div className='faq-navigation'>
            <button className='faq-button' >About Sharpener</button>
            <button className='faq-button'>Eligibility</button>
            <button className='faq-button'>Course Structure</button>
            <button className='faq-button'>ISA and Payments</button>
            <button className='faq-button'>Placements</button>
        </div>
            {queans.map((e)=>
        <div className='faq-body'>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>{e.question}</h3>
                    <p className='answer black-text'>{e.answer}</p>
                </div>
                </li>
            </ul>
        </div>
                )}

    </div>
    </section>
  )
            }
export default FaqSection ;
