import React from 'react';
import { FaYoutube, FaSpotify, FaUnity } from "react-icons/fa";
import { SiWondersharefilmora } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import './WhatIDo.css';

const missions = [
  {
    icon: <FaYoutube />,
    text: 'I am a small content creator with 222 subscribers'
  },
  {
    icon: <FaSpotify />,
    text: 'Electronic/Alternative Rap on Spotify'
  },
  {
    icon: <SiWondersharefilmora />,
    text: 'I am an experienced video editor with 5+ years in experience'
  },
  {
    icon: <FaUnity />,
    text: 'I am a VRChat/model designer in Unity'
  },
  {
    icon: <VscVscodeInsiders />,
    text: 'I use VS Code for React, TypeScript, Vite, HTML, & JavaScript'
  }
];

const WhatIDo: React.FC = () => {
  return (
    <section id="what-i-do" className="what-i-do-section">
      <h1 className="what-i-do-title">Mission Log</h1>
      <div className="missions-container">
        {missions.map((mission, index) => (
          <div key={index} className="mission-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="mission-icon">
              {mission.icon}
            </div>
            <div className="mission-text">
              <p>{mission.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
