import React from 'react'

export default function SingleProjectCard(props) {
  return (
    <div className="single-project-card">
        <img src={props.img} width={"50%"} alt=''/>
        <h2 style={{color:"white"}}>{props.name}</h2>
        <div className='project-links'>
        <i class="fa-solid fa-link fa-2x"></i>
        <i class="fa-brands fa-github fa-2x"></i>
        </div>
    </div>
  )
}
