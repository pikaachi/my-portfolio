import React from "react";
import "../styles/Navbar.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({ scrollToSection, heroRef, aboutRef, experienceRef, projectsRef}) => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="nav-brand" onClick={() => scrollToSection(heroRef)}>Dipika Giri</span>
        <div className="nav-links">
          <button className="nav-item" onClick={() => scrollToSection(aboutRef)}>About</button>
          <button className="nav-item" onClick={() => scrollToSection(experienceRef)}>Experience</button>
          <button className="nav-item" onClick={() => scrollToSection(projectsRef)}>Projects</button>
        </div>
      </div>

      {/* Right Side: Social Icons */}
      <div className="nav-right">
        <a href="mailto:20dipikagiri21@gmail.com" className="nav-item">
          <FaEnvelope className="nav-icon" />
        </a>
        <a href="https://linkedin.com/in/dipika-giri-b5032b213/" 
           target="_blank" rel="noopener noreferrer" className="nav-item">
          <FaLinkedin className="nav-icon" />
        </a>
        <a href="https://github.com/pikaachi"
           target="_blank" rel="noopener noreferrer" className="nav-item">
          <FaGithub className="nav-icon" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
