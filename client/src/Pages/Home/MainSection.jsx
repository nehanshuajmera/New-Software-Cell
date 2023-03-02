import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./mainsection.css"

export default function MainSection() {
    const navigate=useNavigate();
  return (
    <div className='mainsection'>
        <div className='right-box'>
            <h1 >MediCaps Software Cell</h1>
            <h2>Let Connect, Develope, Code !</h2>
            <button onClick={()=>{navigate("/joinus")}} data-label="Register" class="rainbow-hover">
            <span class="sp">Join Us</span>
            </button>
        </div>
        <div className='left-box'>
            <img src='./images/coding.png' width={"360px"} alt=''/>
        </div>
        
    </div>
  )
}
