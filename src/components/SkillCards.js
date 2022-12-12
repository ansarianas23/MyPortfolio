import React from 'react'
import SkillCardData from '../components/SkillCardData'
import SCard from '../components/SCard'
import '../components/SkillCardStyle.css'


const Skillcard = () => {
  return (
    <div className='work-container'>
        <h1 className='skill-heading'>Skills</h1>
        <div className='skills-container'>
        {/* <Skill Card/> */}
        {SkillCardData.map((val, index)=>{
            return(
                <SCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                level={val.level} 
                />
                )
            })}
        </div>
    </div>
  )
}

export default Skillcard
