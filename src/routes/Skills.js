import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import SkillCards from '../components/SkillCards'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="CONTACT." text="Connect with me"/>
      <SkillCards/>
      <Footer/>
    </div>
  )
}

export default Contact
