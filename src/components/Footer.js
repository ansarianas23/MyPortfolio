import React from 'react'
import "../components/FooterStyles.css"
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        {/* Left Footer section */}
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color: "#fff", marginRight:"1.5rem"}}/>
                <div>
                    <p>Dhule, Maharashtra</p>
                    <p>India</p>
                </div>
            </div>
            <div className='phone'>
                <h4>
                <FaPhone size={20} style={{color: "#fff", marginRight:"1.5rem"}}/>
                8830944844
                </h4>
            </div>
            <div className='email'>
                <h4>
                <FaMailBulk size={20} style={{color: "#fff", marginRight:"1.5rem"}}/>
                ansariii.5130@gmail.com
                </h4>
            </div>
        </div>
        {/* Right Footer Section */}
        <div className='right'>
            <h4>About Me</h4>
            <p>This is me Ansari Md Anas im Mechanical Engineer & im a passionate about Web Development im a React Developer.</p>

            <div className='social'>
              <a href='https://www.linkedin.com/in/itsmdanas' rel="noreferrer" target="_blank">
                <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>
              </a>

              <a href='https://github.com/ansarianas23' rel="noreferrer" target="_blank">
                <FaGithub size={30} style={{color: "#fff", marginRight:"1rem"}}/>
              </a>

              <a href='https://www.instagram.com/_anas.dev_/' rel="noreferrer" target="_blank">
                <FaInstagram size={30} style={{color: "#fff", marginRight:"1rem"}}/>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
