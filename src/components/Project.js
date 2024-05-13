import React, { useState } from 'react'

function Project({proj, toggle}) {

  
  return <>
  <div onClick={toggle}  className="group">
      <div className="meta-data">
    </div>
  <img  src={`./images${proj.imageUrl}`} alt="project image" />
  <div className="proj-type btn">{proj.type}</div>
  <div className='group project-title'><span>{proj.title}</span></div>
  <div className="date">
    <span>{proj.date}</span>
  </div>
    </div>
    
    </>
}

export default Project