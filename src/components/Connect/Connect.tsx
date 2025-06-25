import React from 'react';
import { FaYoutube, FaSpotify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Connect.css';

const socialLinks = [
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/@Clumpy_Rojas',
  },
  {
    name: 'Spotify',
    icon: <FaSpotify />,
    url: 'https://open.spotify.com/artist/4vowKA7q3wD94SqlsOGhyY?si=jm0PtDtYQuqMH2QoFTnykg&nd=1&dlsi=e4bc6b6e92c84f6f',
  },
  {
    name: 'Email',
    icon: <MdEmail />,
    url: 'mailto:xandernereo@gmail.com',
  },
];

const Connect: React.FC = () => {
  return (
    <section id="connect" className="connect-section">
      <h1 className="connect-title">Connect</h1>
      <div className="links-container">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h2 className="link-title pixel-font">{link.name}</h2>
            <div className="link-icon">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect;
