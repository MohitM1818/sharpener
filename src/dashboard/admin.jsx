import React, { useState } from 'react'
import '../dashboard.css'
const Admin = () => {
   
    const adminButton = [  <form className='ar-form'>
    <h2>Create question</h2>
<label>Question:
<div><input  type="text"/></div>
</label>
<label>Answer:
<div><input  type="text"/></div>
</label>
<label>Category:
<div><select id="category">
<option value="basic">Basic</option>
<option value="frontend">Frontend</option>
<option value="backend">Backend</option>
</select></div>
</label>
<label className='ar-lastlabel'>Alternative answer:
<div className='ar-lastdiv'><input  type="text" />
<input type="text" />
<input type="text" />
</div>
</label>
<button>Submit</button>
</form>,
<div className="all-ques">
                <h2> All question</h2>
                <p className='ar-question'><span>Question: </span>Which of the following keywords is used to define a variable in Javascript?</p>
                <p className="ar-answer"><span>Right answer: </span>Both A and B</p>
                <p className="ar-alternateans"><span>Wrong answer: </span>Ver,let,none of the above</p>
                <p className='ar-question'><span>Question: </span>Which of the following keywords is used to define a variable in Javascript?</p>
                <p className="ar-answer"><span>Right answer: </span>Both A and B</p>
                <p className="ar-alternateans"><span>Wrong answer: </span>Ver,let,none of the above</p>
               </div>,
                <form className='ar-form'>
                <h2>Update question</h2>
            <label>Question:
            <div><input  type="text"/></div>
            </label>
            <label>Answer:
            <div><input  type="text"/></div>
            </label>
            <label>Category:
            <div><select id="category">
            <option value="basic">Basic</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            </select></div>
            </label>
            <label className='ar-lastlabel'>Alternative answer:
            <div className='ar-lastdiv'><input  type="text" />
            <input type="text" />
            <input type="text" />
            </div>
            </label>
            <button>Submit</button>
              </form>, 
              <div></div>,
              <form className="create-interview">
              <h2>Create interview</h2>
              <label>Email:
          <div><input  type="email"/></div>
          </label>
          <label>timing:
          <div><input /></div>
          </label>
          <label>Duration:
          <div><input /></div>
          </label>
          <button>Create</button>
             </form>,
           <div className="interviews">
           <h2>Scheduled interviews</h2>
           <p>Name: <span>Aman Gupta</span></p>
           <p>Timing: <span>2.30 pm </span></p>
           <p>Day: <span>Monday</span></p>
         </div>
    ]
    let c ='rgba(244,11,11,.6)'
    let d ='transparent'
    const[admin,setadmin] = useState(adminButton[1])
    const[adminbg,setadminbg] = useState(d)
    const[adminbg3,setadminbg3] = useState(c)
    const[adminbg4,setadminbg4] = useState(d)
    const[adminbg5,setadminbg5] = useState(d)
    const[adminbg6,setadminbg6] = useState(d)
    const[adminbg7,setadminbg7] = useState(d)
    function create(){
        setadmin(adminButton[0])
        setadminbg(c)
        setadminbg3(d)
        setadminbg4(d)
        setadminbg5(d)
        setadminbg6(d)
        setadminbg7(d)
    }
    function seeAll(){
        setadmin(adminButton[1])
        setadminbg(d)
        setadminbg3(c)
        setadminbg4(d)
        setadminbg5(d)
        setadminbg6(d)
        setadminbg7(d)
    }
    function update(){
        setadmin(adminButton[2])
        setadminbg(d)
        setadminbg3(d)
        setadminbg4(c)
        setadminbg5(d)
        setadminbg6(d)
        setadminbg7(d)
    }
    function deleteQuestion(){
        setadmin(adminButton[3])
        setadminbg(d)
        setadminbg3(d)
        setadminbg4(d)
        setadminbg5(c)
        setadminbg6(d)
        setadminbg7(d)
    }
    function schedule(){
        setadmin(adminButton[4])
        setadminbg(d)
        setadminbg3(d)
        setadminbg4(d)
        setadminbg5(d)
        setadminbg6(c)
        setadminbg7(d)
    }
    function interviews(){
        setadmin(adminButton[5])
        setadminbg(d)
        setadminbg3(d)
        setadminbg4(d)
        setadminbg5(d)
        setadminbg6(d)
        setadminbg7(c)
    }

  return (
    <div>
        <div className="admin-main">
            <h2 >Admin Dashboard</h2>
            <div className="admin-small">
                <div className="admin-left">
                    <ul>
                        <li className="admin-list"><button className="list-button" onClick={create} style={{backgroundColor:adminbg}}>Create question </button></li>
                        <li className="admin-list"><button className="list-button" onClick={seeAll} style={{backgroundColor:adminbg3}}>See all Question </button></li>
                        <li className="admin-list"><button className="list-button" onClick={update}  style={{backgroundColor:adminbg4}}>Update question</button></li>
                        <li className="admin-list"><button className="list-button" onClick={deleteQuestion}  style={{backgroundColor:adminbg5}}>Delete question</button></li>
                        <li className="admin-list"><button className="list-button" onClick={schedule}  style={{backgroundColor:adminbg6}}>schedule interview</button></li>
                        <li className="admin-list"><button className="list-button" onClick={interviews}  style={{backgroundColor:adminbg7}}>Interviews</button></li>
                    </ul>
                </div>
                <div className="admin-right">
                  {admin}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin