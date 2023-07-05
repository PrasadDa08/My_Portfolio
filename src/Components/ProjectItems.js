import React, { useState } from 'react'

function ProjectItems({projects}) {

  const [currenIndex, setCurrentIndex] = useState(0)

  const goToRight = ()=>{
    const isLastProject = currenIndex === projects.length - 1
    const newIndex = isLastProject ? 0 : currenIndex + 1
    
    setCurrentIndex(newIndex)
  } 

  const goToleft = ()=>{
    const isFirstProject = currenIndex === 0
    const newIndex = isFirstProject ? projects.length -1 : currenIndex - 1
    
    setCurrentIndex(newIndex)
  } 

  const goToProject = (projectIndex) =>{
    setCurrentIndex(projectIndex)
  }


  return (
    <div  className='project-container'>
      <div className='left-btn' onClick={goToleft}>〈 </div>
      <div className='right-btn' onClick={goToRight}> 〉 </div>
      <div className='image-container'>
      <img src={projects[currenIndex===0 ?  projects.length -1 : currenIndex - 1].img } className='previous-img' />
      <img src={projects[currenIndex].img} className='main-img'/>
      <img src={projects[currenIndex === projects.length -1 ? 0 : currenIndex + 1].img} className='next-img'/>
      </div>
      <p>{projects[currenIndex].info}</p>

      <div className='project-dots'>
        {projects.map((project, projectIndex) =>{
          return <h1 onClick={()=> goToProject(projectIndex)}>{projectIndex === currenIndex?'●':'○'}</h1>
        })}
      </div>
    </div>
  )
}

export default ProjectItems
