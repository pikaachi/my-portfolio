import React, { useRef } from 'react';
import './styles/App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#001f3f', color: 'white' }}>
      
      <Navbar scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef}  style={{ backgroundColor: '#001f3f', color: 'white' }} />
      
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      
    </div>
  );
};

export default App;
