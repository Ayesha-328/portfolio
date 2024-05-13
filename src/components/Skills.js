import React from 'react'

function Skills() {
    const skillArray=[{
        skill: "HTML",
        level: 6
    },
    {
        skill: "CSS",
        level: 5
    },
    {
        skill: "JavaScript",
        level: 4
    },
    {
        skill: "React",
        level: 4
    },
    {
        skill: "Python",
        level: 3
    },
    {
        skill: "C++",
        level: 4
    },
    {
        skill: "WordPress",
        level: 2
    },
    {
        skill: "Bootstrap",
        level: 3
    },
]

const skillsElements=skillArray.map((skill,index)=>{
     // Generate an array of dots based on the skill's level
     const dots = Array.from({ length: 7 }, (_, i) => (
        <div
            key={i}
            className={`${i < skill.level ? 'filled' : ''}`} // Add 'filled' class based on skill level
        ></div>
    ));

    return <>
    <div className="skill-bar" key={index}>
        <h4 className="skill-title">{skill.skill}</h4>
        <div className="skill-level">
        {dots}
        </div>
    </div>
    </>
})
  return (
   <div className="skills-container container" id='skills'>
    <h2 className="main-heading">My Skills</h2>

    <div className="skills-section">
    {skillsElements}
    </div>
    <div className="gradient-box box1"></div>
    <div className="gradient-box box2"></div>
    
   </div>
  )
}

export default Skills