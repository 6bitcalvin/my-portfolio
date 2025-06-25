import React, { useState } from 'react';
import StartMenu from '../StartMenu/StartMenu'; // Import StartMenu
import './Taskbar.css'; // Import Taskbar CSS
import { ImWindows } from "react-icons/im"; // Import the ImWindows icon

const Taskbar: React.FC = () => {
  // State to control the visibility of the Start Menu
  const [showStartMenu, setShowStartMenu] = useState(false);

  // Function to toggle the Start Menu visibility
  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  return (
    // Taskbar container, fixed at the bottom
    <div className="taskbar">
      {/* Start Button */}
      <button className="start-button" onClick={toggleStartMenu}>
        {/* Replaced the SVG with the ImWindows icon component */}
        <ImWindows className="windows-icon" />
        <span className="sr-only">Start</span> {/* Screen reader text */}
      </button>

      {/* Conditionally render the Start Menu */}
      {showStartMenu && (
        <StartMenu
          onClose={() => setShowStartMenu(false)} // Pass a close function to StartMenu
        />
      )}

      {/* You can add other taskbar elements here if needed later */}
      <div className="taskbar-center-items">
        {/* Placeholder for other running apps or quick launch icons */}
      </div>

      <div className="taskbar-right-items">
        {/* Placeholder for system tray items like clock, network, etc. */}
        <span className="current-time pixel-font">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
