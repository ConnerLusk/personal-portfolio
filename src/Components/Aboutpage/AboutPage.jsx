import React from 'react'
import { Navbar } from '../Navbar/NavBar'
import './AboutPage.css'
import AboutIntro from './aboutIntro'

function AboutPage() {
  return (
    <div className='aboutPageContainer'>
        <Navbar />
        <AboutIntro />
    </div>
  )
}

export default AboutPage