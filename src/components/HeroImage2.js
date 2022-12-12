import React from 'react'
import '../components/Heroimg2style.css'

const HeroImage2 = (props) => {
  return (
    <div>
      <div className='hero-img'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage2
