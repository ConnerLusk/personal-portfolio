import React from 'react'
import './indiviualExperience.css'

function IndiviualExperience(props) {
  return (
    <div className='individualExperienceContainer'>
      <div className='mainInfoContainer'>
          <div className='compName'>
              {props.props.company}
          </div>
          <div className='compTimeline'>
              {props.props.timeline}
          </div>
      </div>
      <div className='role'>
        {props.props.role}
      </div>
      <div className='jobsContainer'>
        {props.props.description.map(function (i) {
          return (
            <div className='jobAboutSection'>
              {i}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IndiviualExperience