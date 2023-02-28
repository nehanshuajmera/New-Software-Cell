import React from 'react'
import About from './About'
import HeroSection from './HeroSection'
import MainSection from './MainSection'
import Team from './Team'

export default function Home() {
  return (
    <div>
      <MainSection/>
      {/* <HeroSection/> */}
      <About/>
      <Team/>
    </div>
  )
}
