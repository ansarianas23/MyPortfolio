import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import ProjectCards from '../components/ProjectCards'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text="Some of my recent works"/>
      <ProjectCards/>
      <Footer/>
    </div>
  )
}

export default Project
