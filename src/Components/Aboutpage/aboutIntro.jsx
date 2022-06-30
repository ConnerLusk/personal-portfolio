import React from 'react'
import './aboutIntro.css'

function AboutIntro() {
  return (
    <div className='aboutIntroContainer'>
        <div className='aboutPhotoContainer'>
            <img src={require("./me.png")} alt="Me" width="400px" />
        </div>
        <div className='textContainer'>
            <h1>Hello!</h1>
            <div className='aboutTextContainer'>
                <h2>
                    I’m Conner Lusk, a third year computer science major at Northeastern University. 
                    I am passionate about developing and researching new technology to improve the world we live in!
                </h2>
                <h2>
                    Feel free to check out the projects and my previous work experience below.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default AboutIntro