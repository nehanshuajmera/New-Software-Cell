import React from 'react'
import "./services.css"
import SingleTech from './SingleTech'
export default function Services() {
  return (
    <div>
    <h1 style={{textAlign:"center", color:"#FEC868",fontWeight:"bold"}}>Major Techonology</h1>
    <div className='services'>
        <SingleTech img={"fab fa-html5 fa-10x" } name={"HTML"}/>
        <SingleTech img={"fa-brands fa-css3-alt fa-10x" } name={"CSS"}/>
        <SingleTech img={"fa-brands fa-square-js fa-10x" } name={"JavaScript"}/>
        <SingleTech img={"fa-brands fa-react fa-10x" } name={"ReactJs"}/>
        <SingleTech img={"fa-brands fa-node fa-10x" } name={"NodeJs"}/>
        <SingleTech img={"fa-brands fa-android fa-10x" } name={"Android"}/>
        <SingleTech img={"fa-brands fa-python fa-10x" } name={"Python"}/>
        <SingleTech img={"fa-brands fa-java fa-10x" } name={"JAVA"}/>
        <SingleTech img={"fa-solid fa-database fa-10x" } name={"DataBase"}/>
        <SingleTech img={"fa-solid fa-leaf fa-10x" } name={"Mongodb"}/>
        <SingleTech img={"fa-brands fa-bootstrap fa-10x" } name={"Bootstrap"}/>
        <SingleTech img={"fa-brands fa-php fa-10x" } name={"PHP"}/>
  </div>
  </div>
  )
}
