import React from 'react'
import SinglePerson from './SinglePerson'

export default function Team() {
  return (
    <div>
        <h1 style={{textAlign:"center"}}> Team</h1>
    <div className='team-page'>
        <SinglePerson/>
        <SinglePerson/>
        <SinglePerson/>
        <SinglePerson/>
        <SinglePerson/>
    </div>
    </div>
  )
}
