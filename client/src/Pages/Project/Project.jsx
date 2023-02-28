import React from 'react'
import "./project.css"
import SingleProjectCard from './SingleProjectCard'
export default function Project() {
  return (
    <div className="project-page">
        <SingleProjectCard img={'https://moonstone.onrender.com/static/media/logoOnDemand.ac4e6eac67f3b5c57524.png'} name={"MoonStone"}/>
        <SingleProjectCard img={'https://moonstone.onrender.com/static/media/logoOnDemand.ac4e6eac67f3b5c57524.png'} name={"MoonStone"}/>
        <SingleProjectCard img={"https://miifoundation.cyclic.app/images/medicaps.png"} name={"MII Foundation"}/>
        <SingleProjectCard img={"https://miifoundation.cyclic.app/images/medicaps.png"} name={"Software Cell"}/>
    </div>
  )
}
