import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import SkillCards from '../components/SkillCards'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="SKILLS." text="My Technical skills"/>
      <SkillCards/>
      <Footer/>
    </div>
  )
}

export default Contact
