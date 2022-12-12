import React from 'react'
import "./HeroImgStyle.css"
import heroImg from '../img/hero-bg.jpg'
import { Link } from 'react-router-dom'

const Heroimg = () => {
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
        <Link to="/project" className='btn'>Download CV</Link>
        <Link to="/contact" className='btn btn-light'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Heroimg
