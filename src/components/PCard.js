import React from 'react'
import "../components/ProjectCardStyle.css"


const PCard = (props) => {
  return (
        <div className='project-card'>
                <img src={props.imgsrc} alt='project-Img'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='project-details'>
                    <p>{props.description}</p>
                </div>
                <div className='projectbtns'>
                    <a href={props.github} rel="noreferrer" target="_blank" className="btn">GitHub</a>
                    <a href={props.livedemo} rel="noreferrer" target="_blank" className="btn">Live Demo</a>
                </div>
        </div>
  )
}

export default PCard
