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
          My name is Alexander Mills! I grew up with a mixed family, I am
          Colombian/White. I do a lot of things!
          My dad taught me how to code when he was in code fellows. Through many
          YouTube tutorials and google searches i learned html! The React and
          Vite and so on. I've been making YouTube videos since 2015 on older
          channels, my main channel known as "6 bit Calvin" is 7 years old! I
          self taught myself to video edit and I used to be pretty bad. BUT I
          got much better overtime! Only took 5+ years!
        </p>
      </div>
    </section>
  );
};

export default About;
