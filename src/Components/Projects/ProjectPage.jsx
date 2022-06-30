import React from 'react'
import { Navbar } from '../Navbar/NavBar'
import './projectPage.css'
import Projects from './Projects'
import {motion} from 'framer-motion'

function ProjectPage() {
  return (
    <div className='projectsPageContainer'>
        <Navbar />
        <motion.div initial={{y:-1500}} animate={{y:0}} transition={{duration:0.3}}>
          <div className='titleContainer'>
              Personal Projects
          </div>
        </motion.div>
        <div className='projectsDiv'>
          <Projects />
        </div>
    </div>
  )
}

export default ProjectPage