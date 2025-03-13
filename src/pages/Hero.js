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
        <p>I'm a software engineer from Austin, TX. I'm facinated by Machine Learning (like all SE these days!) and 
          I love to create interactive web applications. I'm currently looking for new opportunities.
        </p>
        <a href="mailto:20dipikagiri21@gmail.com" className="hero-button">
          <FaEnvelope className="email-icon" />Say Hi
        </a>
      </div>
    </section>
  );
};

export default Hero;
