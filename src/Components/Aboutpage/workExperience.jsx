import React from 'react'
import './workExperience.css'
import IndiviualExperience from './indiviualExperience'

function WorkExperience() {
  return (
    <div className='workExperienceContainer'>
          <IndiviualExperience props={{timeline:"Jul 2022 -> Present",company:"Reprise",role:"Software Engineer",
          description:["• Utilize modern JS libraries, Django, and Postgres for full-stack web development "]}}/>
      <IndiviualExperience props={{timeline:"Dec 2021 -> Present",company:"Samudra Pacific", role:"Associate",
          description:["• Work alongside the managing partner at a healthtech/fintech venture capital firm ",
                       "• Preform due dilligence, market research, and sector analysis",
                       "• Scrape company data 50% more efficiently by utilizing python"]}}/>
      <IndiviualExperience props={{timeline:"May 2022 -> Jul 2022",company:"Stanford Medicine", role:"Research Assistant",
          description:["• Developing a radiology AI workflow — Nediser — which helps pre-dictate reports ",
                       "• Preform literature review, image labeling, and model creation",
                       "• Created models for automatic pediatric acetabular index measurement and automatic Tonnis classification and quantitative analysis of hip joint space on radiography "]}}/>
    </div>
  )
}

export default WorkExperience