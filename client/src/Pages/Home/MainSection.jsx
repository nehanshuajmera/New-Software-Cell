import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from './HeroSection';
import "./mainsection.css"

export default function MainSection() {
    const navigate=useNavigate();
  return (
    <div className='mainsection'>
        <div className='right-box'>
          <div className="medi-img">
        <img style={{width:"120px", textAlign:"center"}} src="https://miifoundation.cyclic.app/images/medicaps.png" alt="medicaps" />
        </div>
            <h1 style={{textAlign:"center", fontSize:"50px"}} >
              Medi-Caps</h1>
            <h1 style={{textAlign:"center", fontSize:"50px"}} >Software Development Cell</h1>
             <div style={{display:"flex",justifyContent:"center"}}>
            <button  onClick={()=>{navigate("/joinus")}} data-label="Register" class="rainbow-hover">
            <span class="sp">Join Us</span>
            </button>
            </div>
        </div>
        <div className='left-box'>
            {/* <img src='./images/coding.png' width={"360px"} alt=''/> */}
            <HeroSection/>
        </div>
        
    </div>
  )
}
