import React from 'react'
import './workExperience.css'
import IndiviualExperience from './indiviualExperience'

function WorkExperience() {
  return (
    <div className='workExperienceContainer'>
      <IndiviualExperience props={{
        timeline: "Jul 2023 -> Present", company: "Reprise", role: "Software Engineer",
        description: ["• Actively contributed to the development and refinement of a SaaS product in its alpha release through collaboration between VP of Product, Product Design, and 3 active customers",
          "• Demonstrated strong problem-solving skills by addressing technical and operation challenges that arose while implementing analytic tracking a page pagination.",
        ]
      }}
      />
      <IndiviualExperience props={{
        timeline: "Dec 2021 -> Present", company: "Samudra Pacific", role: "Associate",
        description: ["• Work alongside the managing partner at an AI focused Venture Capital firm",
          "• Developed an algorithm to ensure firms Office of Foreign Asset Control(OFAC) compliance for both current and future investment vehicles",
          "• Perform due diligence on the proposed technologies and assessed the business viability of the founder's idea"]
      }}
      />
      <IndiviualExperience props={{
        timeline: "Jan 2023 -> Jul 2023", company: "Veterans Affairs", role: "Software Developer",
        description: ["• Develop modules for the Radiology Department"]
      }}
      />
      <IndiviualExperience props={{
        timeline: "Jul 2022 -> Dec 2022", company: "Reprise", role: "Software Engineer",
        description: ["• Utilized modern JS libraries, Django, and Postgres for full-stack web development",
          "• Developed features on both the Screen and App Capture teams to allow users to smoothly create customized product demos",
          "•  Pioneered HAR document upload allowing for easier error handling for non-technical clients"]
      }}
      />
      <IndiviualExperience props={{
        timeline: "May 2022 -> Jul 2022", company: "Stanford Medicine", role: "Research Assistant",
        description: ["• Developing a radiology AI workflow — Nediser — which helps pre-dictate reports ",
          "• Preform literature review, image labeling, and model creation",
          "• Created models for automatic pediatric acetabular index measurement and automatic Tonnis classification and quantitative analysis of hip joint space on radiography "]
      }}
      />
    </div>
  )
}

export default WorkExperience