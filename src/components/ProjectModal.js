import React from 'react'
import { Link } from 'react-router-dom';
import Close from "../assets/images/close.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ProjectModal({project,handleClose}) {
  return (
    <div className="project-modal">
          <div className="project-modal-container">
            <img onClick={handleClose} src={Close} alt="" className="close-btn" />
            <h3 className="modal-title">{project.title}</h3>
            <div className="modal-content">
              <div className="modal-details">
              <img src={`./images${project.imageUrl}`} alt="" className="modal-img" />
                <ul className="modal-links">
                  <li className="modal-project-type">
                    <FontAwesomeIcon className='link-icon' icon={faCode} />
                    <span>{project.type}</span>

                  </li>
                   
                  {project.socialLinks[0] && 
                  <Link to={project.socialLinks[0]} target="_blank">
                  <li className="modal-link-item">
                    <FontAwesomeIcon className='link-icon' icon={faLinkedin} />
                    <span>LinkedIn post</span>
                  </li>
                  </Link>
                  }

                  {project.socialLinks[1] &&
                  <Link to={project.socialLinks[1]} target="_blank">
                  <li className="modal-link-item">
                    <FontAwesomeIcon className='link-icon' icon={faGithub} />
                    <span>Github repo</span>
                  </li>
                  </Link>
                  }
                  
                  {project.link && 
                  <Link to={project.link} target="_blank">
                  <li className="modal-link-item">
                    <FontAwesomeIcon className='link-icon' icon={faArrowUpRightFromSquare} />
                    <span>Preview</span>
                  </li>
                  </Link>
                  }
                </ul>
              </div>
              <ul className="tags-container">
                {project.tech && project.tech.map((tag,index)=>{
                  return <li className="tag">{tag}</li>
                })}
              </ul>
              <div className="modal-desc">{project.description}</div>
            </div>

          </div>
        </div>
  )
}

export default ProjectModal