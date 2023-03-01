import React from 'react'
import './team.css'
export default function SinglePerson() {
  return (
    <div className='singleteam'>
        <img src='https://media.licdn.com/dms/image/D4D03AQF7GpWeMMk6rQ/profile-displayphoto-shrink_200_200/0/1664336348364?e=1683158400&v=beta&t=dpY-8l2L90cWzXFkHSG2Dg5D6KsOXkfco_p9VQEeWmU' alt=''/>
        <h2 style={{textAlign:"center",color:"#3C2A21"}}>Vishal Sharma</h2>
        <p style={{textAlign:"center",color:"#3C2A21"}}>Team Leader</p>
        <div className='social-icon'>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-solid fa-envelope"></i>
        </div>
    </div>
  )
}
