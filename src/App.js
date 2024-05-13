import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
    <Nav />
    <Home />
    <About />
    <Skills />
    <Projects/>
    <Certificates />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
