import React from 'react'
import "../components/SkillCardStyle.css"


const SCard = (props) => {
  return (
        <div className='skill-card'>
                <img src={props.imgsrc} alt='skill-Img'/>
                <p className='skill-title'>{props.title}</p>
                <p className='skill-level'>{props.level}</p>
        </div>
  )
}

export default SCard