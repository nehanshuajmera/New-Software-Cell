import React from 'react'

export default function SingleProjectCard(props) {
  return (
    <div className="single-project-card">
        <a href={props.link}><img src={props.img} width={"50%"} alt=''/></a>
        <a href={props.link}><h2 style={{color:"white"}}>{props.name}</h2></a>
        <div className='project-links'>
        <a style={{color:"gray"}} href={props.link}><i class="fa-solid fa-link fa-2x"></i></a>
        <a style={{color:"gray"}} href={props.github}><i class="fa-brands fa-github fa-2x"></i></a>
        </div>
    </div>
  )
}
