import React from 'react'
import "../components/ProjectCardStyle.css"
import PCard from './PCard'
import ProjectCardData from './ProjectCardData'


const ProjectCards = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
        {/* <Card/> */}
        {ProjectCardData.map((val, index)=>{
            return(
                <PCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                description={val.description}
                github={val.github}
                livedemo={val.livedemo} 
                />
                )
            })}
        </div>
    </div>
  )
}

export default ProjectCards