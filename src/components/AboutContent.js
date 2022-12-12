import React from 'react'
import "../components/AboutContentStyles.css"
import {Link} from "react-router-dom"
import r1 from "../img/react1.jpg"
import r2 from "../img/react2.webp"


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who AM I?</h1>
            <p>Im a react front-end developer. I Create beautiful responsive and secure websites.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={r1} className="img" alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={r2} className="img" alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
