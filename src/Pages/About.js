import React from 'react'
import {motion} from 'framer-motion'
import AboutPage from '../Components/Aboutpage/AboutPage'

function About() {
  return (
    <motion.div
      initial={{opacity:0}} 
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
    >
        <AboutPage />
    </motion.div>
  )
}

export default About