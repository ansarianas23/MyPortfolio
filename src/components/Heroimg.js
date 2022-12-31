import React from 'react'
import "./HeroImgStyle.css"
import heroImg from '../img/hero-bg.jpg'
import { Link } from 'react-router-dom'

const Heroimg = () => {

  const resumeLink = "https://drive.google.com/file/d/1Xri1SZmQYPFcO8kGbY6QxYrzIWq9WdsQ/view?usp=sharing"

  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={heroImg} alt="HeroImage"/>
      </div>
      <div className='content'>
        <p className='supText'>Hello I'm</p>
        <h1>Ansari Md Anas</h1>
        <p className='subText'>Front-End React Developer.</p>
      <div className='buttons'>
        <a href={resumeLink} rel="noreferrer" target="_blank"  className='btn'>Download CV</a>
      </div>
      </div>
    </div>
  )
}

export default Heroimg
