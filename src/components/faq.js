import React, { useState } from 'react'

 const FaqSection = () => {
    const queans = [
        <div className='faq-body'>
                {/* ABOUT SHARENER  */}
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>What is Sharpener?</h3>
                    <p className='answer black-text'>Sharpener is all about making learning fun and addictive. Our objective is that just like how games can get addictive, even learning should. In this process, you upskill and crack AMAZING job offers.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>What is Pay After Placement?</h3>
                    <p className='answer black-text'>It is simple. Pay after you get a job. We have taken it one level deeper, ensuring you pay only after you start earning. This ensures you don’t hurt your pockets.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Why Sharpener and not other platforms?</h3>
                    <p className='answer black-text'>Our testimonials speak for themselves. We are much much more affordable. We do NOT spoon feed students. Be ready to work hard! We have a 100% placement record for students that complete our courses.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>How can I trust you? Lot’s of scammy programs online!</h3>
                    <p className='answer black-text'>I agree. Hence we allow you 14 days to explore our platform. It is also the period wherein we see if you are serious about the program. Only after these 14 days, if you qualify and are happy with us, you sign the ISA. Else don’t!</p>
                </div>
                </li>
            </ul>
            
            
        </div>,

        <div className='faq-body'>
            {/* ELIGIBILITY  */}
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Who is eligible for Sharpener?</h3>
                    <p className='answer black-text'>Anyone who is the final year of his bachelors or has already completed his graduation is permitted.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Is there any work experience requirement?</h3>
                    <p className='answer black-text'>Work experience is not a requirement from Sharpener's side. Just focus on your skills!</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>So I can enroll and I get an ISA for 100% job guarantee?</h3>
                    <p className='answer black-text'>No. Right from Day 1, you have to prove you are worth it. The first 14 days is the Qualification phase in which you have to score 4000 points. If you fail to do so, there is no ISA for you and you cannot proceed ahead. This also gives time for you to explore the platform without signing the ISA with us. We are totally transparent that way :)</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>So I just need to qualify and sign the ISA? That’s it?</h3>
                    <p className='answer black-text'>Yes and no. That’s all there is to the agreement between us. However, your hard work has just started. What package you get totally depends on how hard you work.So make sure you keep pushing EACH and EVERY DAY.</p>
                </div>
                </li>
            </ul>
            
            
        </div>,
         
         <div className='faq-body'>
            {/* COURSE STRUCTURE  */}
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Does Sharpener give live classes?</h3>
                    <p className='answer black-text'>Yes, we give live doubt sessions everyday. The timings are displayed on your dashboard as soon as you get started. However, make sure you go through the resource materials before coming for the session. No spoon feeding! Try things on your own and discuss doubts live with mentors.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>How can I solve my doubts?</h3>
                    <p className='answer black-text'>Attending classes is the best way. Of course, discussing with your peers is always fun. Group learning always helps. However, the main thing is for you to really battle the problem yourself first!</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Is it mandatory to join doubt sessions?</h3>
                    <p className='answer black-text'>Not at all! Attend doubt sessions only if you have doubts. If resource materials are good enough to solve the questions, go ahead with the entire course.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>How long is the course?</h3>
                    <p className='answer black-text'>There are some approximations as you can see in the Course section. However, it all depends on how much effort you are putting. We will not consider you ready for placements till we feel you have completed the course with full honestly. Quality comes first for us.</p>
                </div>
                </li>
            </ul>
            
            
        </div>,
        <div className='faq-body'>
            {/* ISA & PAYMENTS  */}
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>What is an ISA?</h3>
                    <p className='answer black-text'>ISA is a very common Pay after Placement product wherein one only has to pay for a product after they get a job. It stands for Income Share agreement.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>What is Pay After Placement?</h3>
                    <p className='answer black-text'>It is simple. Pay after you get a job. We have taken it one level deeper, ensuring you pay only after you start earning. This ensures you don’t hurt your pockets.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Why Sharpener and not any other platform?</h3>
                    <p className='answer black-text'>Our testimonials speak for themselves.We are much much more affordable. We do NOT spoon feed students. Be ready to work hard! We have a 100% placement record for students that complete our courses.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>How can I trust you? Lot’s of scammy programs online!</h3>
                    <p className='answer black-text'>I agree. Hence we allow you 14 days to explore our platform. It is also the period wherein we see if you are serious about the program. Only after these 14 days, if you qualify and are happy with us, you sign the ISA. Else don’t!</p>
                </div>
                </li>
            </ul>
            
            
        </div>,
        <div className='faq-body'>
            {/* PLACEMENTS */}
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>So if I work hard, I will surely get a job?</h3>
                    <p className='answer black-text'>We have never failed to do so till date. We focus heavily on quality and as long as companies hire, Sharpenerians have it all set!</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>Do I have to take a job that you offer?</h3>
                    <p className='answer black-text'>We will ask you if you are interested in a particular company before we refer you. But if you accept an interview but then reject proceeding with the interviews or reject the offer, that is a serious violation of our trust and we do not permit that. The ISA will be started in that case based on the offer.</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>So I decide my package?</h3>
                    <p className='answer black-text'>Yes and no. You can have your expectations but obviously the company decides! Always remember that you can progress ahead all your life, but it is not good to stay jobless or without relevant work experience. Discuss with your Sharpener mentors. They will guide you what you should expect. We would always want what’s best for you. After all, we charge you a percentage of your salary. Hence the more you earn, the better it is also for us!</p>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                    <p className='faq-ptag'><svg className='faq-svg' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#bb0000" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg" style={{color: "rgb(187, 0, 0);"}}><path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z"></path></svg></p>
                <div>
                    <h3 className='question black-text'>How long before I sit for placements?</h3>
                    <p className='answer black-text'>Depends on the student. Work harder, smarter and faster, don’t skip assignments, don’t cheat. Once you clear the final mock interview we have, you are ready for placements. How long it takes varies from student to student.</p>
                </div>
                </li>
            </ul>
            
            
        </div>
       
    
    ]
    const [value , setValue] = useState(queans[0])
    const  queansA = ()=>   {
        return (setValue(queans[0]))
    }
    const  queansB = ()=>   {
        return (setValue(queans[1]))
    }
    const  queansC = ()=>   {
        return (setValue(queans[2]))
    }
    const  queansD = ()=>   {
        return (setValue(queans[3]))
    }
    const  queansE = ()=>   {
        return (setValue(queans[4]))
    }
  

   
  return (
    <section className='faq-section'>
    <div>
        <h1 className='black-text faq-heading'>Frequently Asked Questions</h1>
        <div className='faq-navigation'>
            <button className='faq-button' onClick={queansA} >About Sharpener</button>
            <button className='faq-button' onClick={queansB}>Eligibility</button>
            <button className='faq-button' onClick={queansC}>Course Structure</button>
            <button className='faq-button' onClick={queansD}>ISA and Payments</button>
            <button className='faq-button' onClick={queansE}>Placements</button>
        </div>
            
        <div>{value}</div>

    </div>
    </section>
  )
            }
export default FaqSection ;
