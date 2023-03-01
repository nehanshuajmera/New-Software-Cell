import React from 'react'
import "./project.css"
import SingleProjectCard from './SingleProjectCard'
export default function Project() {
  return (
    <div>
      <h1 style={{textAlign:"center",fontWeight:"bold"}}>Projects</h1>
    <div className="project-page">
        <SingleProjectCard img={'https://moonstone.onrender.com/static/media/logoOnDemand.ac4e6eac67f3b5c57524.png'} name={"MoonStone"} link={"https://moonstone.onrender.com/"} github={"https://github.com/sharma39vishal/moonstone-fest"}/>
        <SingleProjectCard img={'https://moonstone.onrender.com/static/media/logoOnDemand.ac4e6eac67f3b5c57524.png'} name={"MoonStone"} link={"https://moonstone.onrender.com/"} github={"https://github.com/sharma39vishal/moonstone-fest"}/>
        <SingleProjectCard img={"https://miifoundation.cyclic.app/images/medicaps.png"} name={"MII Foundation"} link={"https://miifoundation.cyclic.app/"} github={"https://github.com/sharma39vishal/mii"}/>
        <SingleProjectCard img={"https://miifoundation.cyclic.app/images/medicaps.png"} name={"Software Cell"} link={"https://softwarecell.cyclic.app/"} github={"https://github.com/nehanshuajmera/New-Software-Cell"}/>
    </div>
    </div>
  )
}
