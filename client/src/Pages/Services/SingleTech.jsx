import React from 'react'

export default function SingleTech(props) {
  return (
    <div style={{margin:"20px"}}>
        <i class={props.img}></i>
        <h2 style={{textAlign:"center"}}>{props.name}</h2>
    </div>
  )
}
