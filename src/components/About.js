import React ,{useState, useEffect} from 'react'
import AnimatedLetters from './AnimatedLetters';
import "./animation.css"
import MiniBall from "../assets/images/mini-ball.png"
import AboutImage from "../assets/images/ayesha-profile-pic.png"
import DotPattern from "../assets/images/dot-pattern.png"
import { Link } from 'react-scroll'

function About() {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => clearTimeout(timer); // Cleanup the timeout on component unmount
      }, []);
    return (
        <div className="about-container container" id='about'>
            <div className="img-content">
                <h2 className="main-heading">
                <AnimatedLetters letterClass={letterClass}
          strArray={['A','b','o','u','t',' ','M','e']}
          idx={1}/>
                </h2>
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

                <p className="about-desc">Hi, I’m Ayesha — a final-year Software Engineering student at NED University, passionate about AI and full-stack development. I enjoy turning ideas into real-world solutions, whether that’s building AI-powered apps, designing scalable platforms, or experimenting with new technologies just to see what’s possible.
                    <br/>

Over the past few years, I’ve gained experience through internships at Weaves Corporation Ltd (KAADI) and GAOTek, where I worked on projects ranging from digital customer solutions to global web development. Alongside that, I’ve built projects, each one teaching me something new about problem-solving, clean code, and building tech that feels human, not complicated.
                    <br/>

I’m skilled in the MERN & PERN stacks, JavaScript/TypeScript, SQL, Python, C++, and more, with hands-on experience in tools like Azure AI, Streamlit, and Tailwind CSS. But beyond the tools, I bring curiosity, collaboration, and a drive to keep learning — because that’s what keeps me growing as a developer. </p>
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