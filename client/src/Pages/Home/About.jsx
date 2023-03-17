import React from 'react'
import AboutCard from './AboutCard'
import './about.css'
export default function About() {
  return (
    <div>
          <h1 style={{textAlign:"center"}}>About Us</h1>          
        <div  className='about-section'>
          <div className='right-box'>
       <AboutCard/>
       </div>
        <div className='left-box' style={{marginTop:"0px"}}>
            <h3 style={{textAlign:"center"}}> 
        Medi-Caps University has established a Software Cell with the objective of enhancing the skills and knowledge of its students in the field of software development.
The Software Cell at Medi-Caps University is committed to equipping students with the latest tools and techniques in software development. Its primary aim is to bridge the gap between industry requirements and academic curriculums by organising various training sessions and providing internships. Additionally, the Software Cell offers students opportunities to work on real-world projects, thereby enabling them to gain practical experience in the software development field.
     </h3>
       </div>
        </div>
    </div>
  )
}
