import React from 'react'
import MiniBall from "../assets/images/mini-ball.png"
import AboutImage from "../assets/images/ayesha-profile-pic.png"
import DotPattern from "../assets/images/dot-pattern.png"
import { Link } from 'react-scroll'

function About() {
    return (
        <div className="about-container container" id='about'>
            <div className="img-content">
                <h2 className="main-heading">About Me</h2>
                <div className="img-wrapper">
                    <img className='about-img' src={AboutImage} alt="" />
                    <img src={MiniBall} alt="" className="about-mini-ball" />
                </div>

            </div>

            <div className="about-content">
            <Link 
      activeClass="active" 
      to="skills" 
      spy={true} 
      smooth={true} 
      duration={500} 
      
    ><svg width="118" height="100" viewBox="0 0 208 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.824 68.2916V80.7083H143L114.894 100.842L127.157 109.62L176.176 74.4999L127.157 39.3794L114.894 48.158L143 68.2916H31.824Z" fill="#FA00FF" />
                </svg></Link>

                <p className="about-desc">Meet Ayesha, a dedicated Software Engineering student at NED University, with a fervent passion for web development. Specializing in React.js, HTML, CSS, and JavaScript, Ayesha possesses a strong foundation in building dynamic digital solutions. Proficient in languages like C++ and Python, she tackles coding challenges with ease. Ayesha's meticulous attention to detail, coupled with her commitment to staying updated with industry trends, ensures that every project she undertakes is not only visually striking but also optimized for peak performance. </p>
                <Link 
      activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      duration={500} 
      
    ><button className="btn about-btn">Contact Me</button></Link>
                <img src={DotPattern} alt="dot pattern" className="dot-design" />
                <div className="gradient-box box1"></div>
                <div className="gradient-box box2"></div>
            </div>
        </div>
    )
}

export default About