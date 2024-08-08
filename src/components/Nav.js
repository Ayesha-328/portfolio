import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    const ref = useRef();

    function toggle() {
        setNavOpen(prevNavOpen => !prevNavOpen);
    }

    useEffect(() => {
        const handler = (event) => {
            if (navOpen && ref.current && !ref.current.contains(event.target)) {
                setNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [navOpen]);

    return (
        <nav ref={ref} className="navbar">
            <div className="nav-container">
                <div className="site-logo">
                    <h2 className="logo">Ayesha</h2>
                    <h2 className="sub-logo">Najeeb</h2>
                </div>

                <ul className={`${navOpen ? "display-menu" : ""} menu-items`}>
                    <li className="list-item"><Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        offset={-100}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavOpen(false)} // Close the menu on click
                    >Home</Link></li>
                    <li className="list-item"><Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavOpen(false)}
                    >About</Link></li>
                    <li className="list-item"><Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setNavOpen(false)}
                    >Projects</Link></li>
                    <li className="list-item"><Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavOpen(false)}
                    >Skills</Link></li>
                    <li className="list-item"><Link
                        activeClass="active"
                        to="certificates"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavOpen(false)}
                    >Certificates</Link></li>
                </ul>

                <div className="side-menu">
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavOpen(false)}
                    ><button className="btn contact-btn">Contact Me</button></Link>
                    <div onClick={toggle} className="toggle-btn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
