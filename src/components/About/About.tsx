import React from 'react';
import './About.css';
// This assumes you have an 'assets' folder in 'src' with Me.png inside it.
import myPicture from '../../assets/Me.png'; 

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image-container">
        <img 
          src={myPicture} 
          alt="A pixelated picture of me"
          className="about-img"
        />
      </div>
      <div className="about-text">
        <h1>Move it!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
};

export default About;
