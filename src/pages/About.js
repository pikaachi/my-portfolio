import React from 'react';
import '../styles/About.css';
import profileImage from '../assests/profile.JPG'; // Import your image

const About = () => {
  return (
    <section id="about" data-scroll-section className="about">
      <h2>/ about me</h2>
      <div className="about-content">
        <div className="about-text-container">
          <p>I am a software engineer specializing in Web applications.</p>
          <p>I have a passion for turning business problems into scalable software solutions.</p>
          <p>Here are some technologies I have been working with:</p>
          {/* Skills List */}
          <ul className="skills-list">
            <li>ASP.NET Core</li>
            <li>Python</li>
            <li>Flask</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Oracle & PostgreSQL</li>
            <li>REST APIs</li>
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
