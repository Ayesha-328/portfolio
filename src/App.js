import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

function App() {
  return (
    <>
    <Nav />
    <Home />
    <ScrollAnimation animateIn="fadeIn">
    <About />
</ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
    <Skills />
   
</ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
    <Projects/>
   
</ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
    <Certificates />
   
</ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
    <Contact />
   
</ScrollAnimation>

    <Footer />
    </>
  );
}

export default App;
