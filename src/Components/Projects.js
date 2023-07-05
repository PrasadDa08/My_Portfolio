import React from 'react'
import rps from "../images/Screenshot 2023-06-23 at 1.58.56 AM.png"
import { Link } from 'react-router-dom'
import image1 from '../images/download.jpeg'
import image2 from '../images/download (1).jpeg'
import image3 from '../images/download (2).jpeg'
import image4 from '../images/images.png'

import ProjectItems from './ProjectItems'
function Projects() {

  const projects = [
    {img:rps, title:'RPS',info:'A Simple game created by Using Python.'},
    {img:image1, title:'RPS',info:'A Simple game created by Using Python.'},
    {img:image2, title:'RPS',info:'A Simple game created by Using Python.'},
    {img:image3, title:'RPS',info:'A Simple game created by Using Python.'},
    {img:image4, title:'RPS',info:'A Simple game created by Using Python.'},
  ]
  return (
    <ProjectItems projects = {projects}/>
    // <div className='projects'>
    //   <h1>Projec<span>ts</span></h1>
    //   <div className='project-content'>
      

    //   <div className='project-card'>
    //     <img src={rps}></img>
    //     <h4>Rock, Paper, Sessiors Game</h4>
    //     <p>A Simple game created by Using Python.</p>
    //     <a href="https://replit.com/@pRaSadd08/RockPapperScissors" target='_blank'>Replit Link</a>
    //   </div>

    //   <div className='project-card'>
    //     <img src={rps}></img>
    //     <h4>Rock, Paper, Sessiors Game</h4>
    //     <p>A Simple game created by Using Python.</p>
    //     <a href="https://replit.com/@pRaSadd08/RockPapperScissors" target='_blank'>Replit Link</a>
    //   </div>

    //   <div className='project-card'>
    //     <img src={rps}></img>
    //     <h4>Rock, Paper, Sessiors Game</h4>
    //     <p>A Simple game created by Using Python.</p>
    //     <a href="https://replit.com/@pRaSadd08/RockPapperScissors" target='_blank'>Replit Link</a>
    //   </div>

    //   <div className='project-card'>
    //     <img src={rps}></img>
    //     <h4>Rock, Paper, Sessiors Game</h4>
    //     <p>A Simple game created by Using Python.</p>
    //     <a href="https://replit.com/@pRaSadd08/RockPapperScissors" target='_blank'>Replit Link</a>
    //   </div>

    //   <div className='project-card'>
    //     <img src={rps}></img>
    //     <h4>Rock, Paper, Sessiors Game</h4>
    //     <p>A Simple game created by Using Python.</p>
    //     <a href="https://replit.com/@pRaSadd08/RockPapperScissors" target='_blank'>Replit Link</a>
    //   </div>

    //   <div className='project-card'>
    //     <img src={rps}></img>
    //     <h4>Rock, Paper, Sessiors Game</h4>
    //     <p>A Simple game created by Using Python.</p>
    //     <a href="https://replit.com/@pRaSadd08/RockPapperScissors" target='_blank'>Replit Link</a>
    //   </div>
    // </div>
    // </div>
  )
}

export default Projects
