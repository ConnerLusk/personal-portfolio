import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import {AnimatePresence} from 'framer-motion'
import Projects from '../Pages/Projects';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter={true} initial={false}>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes