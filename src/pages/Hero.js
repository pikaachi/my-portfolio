import React from 'react';
import '../styles/Hero.css'; // We'll create a separate CSS file for this
import '../components/HeroEffect.js'; 
import { FaEnvelope } from 'react-icons/fa';
import HeroEffect from '../components/HeroEffect'; // Import the animated effect

const Hero = () => {
  return (
    <section className="hero" data-scroll-section>
      <div className="hero-effect-container">
        <HeroEffect /> {/* The effect is now positioned in a controlled div */}
      </div>
      <div className='hero-content'>
        <h1>hi,  <span className="pika-name">pika</span> here.</h1>
        <h2>I create stuff sometimes</h2>
        <p>I'm a software engineer based in Austin, TX. 
        I’m someone who’s endlessly curious about AI agents and 
        how things can work just a little smarter. 
        I also have a habit of optimizing everyday life—like 
        subconsciously running a shortest-path algorithm (Dijkstra or A*) 
        in my head while driving, factoring in distance, traffic lights, and traffic just for fun.</p>
        <a href="mailto:20dipikagiri21@gmail.com" className="hero-button">
          <FaEnvelope className="email-icon" />Say Hi
        </a>
      </div>
    </section>
  );
};

export default Hero;
