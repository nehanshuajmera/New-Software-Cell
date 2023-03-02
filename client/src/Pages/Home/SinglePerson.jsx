import React from 'react'
import './team.css'
export default function SinglePerson(props) {
  return (
    <div className='singleteam'>
        <img src={props.img} alt='' width={"300px"}/>
        <h2 style={{textAlign:"center",color:"#3C2A21"}}>{props.name}</h2>
        <p style={{textAlign:"center",color:"#3C2A21"}}>{props.designation}</p>
        <div className='social-icon' style={{color:"#3C2A21"}}>
        <a href={props.lnd} class="fa-brands fa-linkedin fa-2x"></a>
        <a href={props.mail} class="fa-solid fa-envelope fa-2x"></a>
        </div>
    </div>
  )
}
