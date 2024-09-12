import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import HiEmoji from "../assets/images/hi-emoji.gif"
import HomeDesign from '../assets/images/home-design.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Resume from "../assets/resume.pdf"
import A from "../assets/ayesha_logo.png"
import AnimatedLetters from './AnimatedLetters';
import "./animation.css"
import "./bg.scss"

function Home() {
  const [letterClass, setLetterClass]=useState('text-animate')
  // const hiArray=['H','i',',','I',"'","m"]
  // const nameArray=['y','e','s','h','a']
  const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => clearTimeout(timer); // Cleanup the timeout on component unmount
  }, []);
  
  return (
    <>
      <div className="home-container container" id='hero'>

        {/* background */}
        <div class="background-container">
          <div class="stars"></div>
          <div class="twinkling"></div>
          
        </div>
        {/* background */}
        <div className="home-content">
        
            <img className='hi' src={HiEmoji} alt="" />
          <h1 className='intro'>
            <span className={`${letterClass} _2`}>H</span>
            <span className={`${letterClass} _4`}>i,</span>
            <span className={`${letterClass} _5`}>I</span>
            <span className={`${letterClass} _6`}>m</span>
            {/* <AnimatedLetters letterClass={letterClass}
          strArray={hiArray}
          idx={1}/> */}
            <img src={A} className='initialLetter' alt="A"  />
            {/* <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={7}/> */}
          <span className={`${letterClass} _8`}>y</span>
            <span className={`${letterClass} _9`}>e</span>
            <span className={`${letterClass} _10`}>s</span>
            <span className={`${letterClass} _11`}>h</span>
            <span className={`${letterClass} _12`}>a</span>
            </h1>
          <h3 className='developer'>
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={13}/>
          </h3>

          {/* <div className="description">
          <svg width="4" height="120" viewBox="0 0 6 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 115L0.113249 120L5.88675 120L3.5 115L2.5 115ZM2.5 1.1852e-10L2.5 115.5L3.5 115.5L3.5 -1.1852e-10L2.5 1.1852e-10Z" fill="white"/>
</svg>


          <p className="desc">I’m a full-stack web
            developer and I work
            remotely from Pakistan</p>
          </div> */}


        </div>

        <div className="home-design">
          <div className="design">
            <div className="gradient-box" id="box1"></div>
            <div className="gradient-box" id="box2"></div>
            <div className="gradient-box" id="box3"></div>
            <div className="gradient-box" id="box4"></div>
            <img className='design-image' src={HomeDesign} alt="" />
          </div>

          <a href={Resume} download >
            <div className="resume">
              <FontAwesomeIcon icon={faDownload} />
              <span className="resume-text">Resume</span>

            </div>
          </a>


        </div>

        <div className="social-links">
          <Link target='_blank' to="www.linkedin.com/in/ayesha328">

            <FontAwesomeIcon className='social-icon' icon={faLinkedinIn} />
          </Link>
          <Link target='_blank' to="https://github.com/Ayesha-328">
            <FontAwesomeIcon className='social-icon' icon={faGithub} />

          </Link>
          <Link target='_blank' to="https://www.instagram.com/ayesha__najeeb?igsh=ampweHMzNnczZDZ5">
            <FontAwesomeIcon className='social-icon' icon={faInstagram} />

          </Link>
          <Link target='_blank' to="https://x.com/ayesh_najeeb">
            <FontAwesomeIcon className='social-icon' icon={faXTwitter} />

          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
