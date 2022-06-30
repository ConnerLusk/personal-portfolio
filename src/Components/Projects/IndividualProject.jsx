import React from 'react'
import './individualProject.css'

function IndividualProject(props) {
  return (
    <div className='individualProjectContainer'>
      <div className='individualProjectTitle'>
        {props.props.title}
      </div>
      <div className='indicidualProjectTechStack'>
        {props.props.languages}
      </div>
      <div className='indiviudualProjectAboutContainer'>
        {props.props.about.map(function (i) {
            return (
              <div className='individualProjectAbout'>
                {i}
              </div>
            )
          })}
      </div>

    </div>
  )
}

export default IndividualProject