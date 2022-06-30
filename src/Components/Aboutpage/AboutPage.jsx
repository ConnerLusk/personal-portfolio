import React, {useRef} from 'react'
import { Navbar } from '../Navbar/NavBar'
import './AboutPage.css'
import AboutIntro from './aboutIntro'
import WorkExperience from './workExperience'
import {motion} from 'framer-motion'

function AboutPage() {
  return (
    <div className='aboutPageContainer'>
      <Navbar />
      <motion.div initial={{x:-1500}} animate={{x:0}} transition={{duration:0.5}}>
        <AboutIntro />
      </motion.div>
      <motion.div initial={{x:1500}} animate={{x:0}} transition={{duration:0.5}}>
        <div className='aboutSection'>
          <WorkExperience />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage