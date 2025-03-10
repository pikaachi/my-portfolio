import React from 'react';
import '../styles/About.css';
import profileImage from '../assests/profile.JPG'; // Import your image

const About = () => {
  return (
    <section id="about" data-scroll-section className="about">
      <h2>/ about me</h2>
      <div className="about-content">
        <div className="about-text-container">
          <p>I am a software engineer specializing in React and Node.js.</p>
          <p>I have a passion for creating interactive web applications that provide value to users.</p>
          <p>Here are some technologies I have been working with:</p>
          {/* Skills List */}
          <ul className="skills-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>MongoDB & PostgreSQL</li>
            <li>REST APIs & GraphQL</li>
            <li>Git & GitHub</li>
          </ul>

          <p>Currently, I am looking for new opportunities to work on exciting projects.</p>
        </div>
        <div className="about-image-container">
          <img src={profileImage} alt="Profile" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
