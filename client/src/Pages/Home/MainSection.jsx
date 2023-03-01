import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./mainsection.css"

export default function MainSection() {
    const navigate=useNavigate();
  return (
    <div className='mainsection row'>
      
        <div className='column'>
            <h1>MediCaps Software Cell</h1>
            <h2>Let Connect, Develope, Code !</h2>
            <button onClick={()=>{navigate("/joinus")}} data-label="Register" class="rainbow-hover">
            <span class="sp">Join Us</span>
            </button>
        </div>
        <div className='column'>
            <img src='./images/coding.png' width={"80%"} alt=''/>
        </div>
        
    </div>
  )
}