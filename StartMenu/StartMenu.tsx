import React from 'react';
import './StartMenu.css'; // Import StartMenu CSS
import { IoIosMail, IoMdSettings } from "react-icons/io"; // Mail and Settings icons
import { FaPencilAlt } from "react-icons/fa"; // Pencil icon
import { SiAudiomack } from "react-icons/si"; // Audio icon

// Define props for the StartMenu component
interface StartMenuProps {
  onClose: () => void; // Function to close the menu
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose }) => {
  // Function to handle clicking outside the menu to close it
  const handleOutsideClick = (event: React.MouseEvent) => {
    // Check if the click occurred on the menu itself or its children
    // If not, close the menu
    if ((event.target as HTMLElement).closest('.start-menu') === null) {
      onClose();
    }
  };

  return (
    // Start Menu Backdrop - covers the whole screen to catch outside clicks
    <div className="start-menu-backdrop" onClick={handleOutsideClick}>
      {/* Start Menu Container */}
      <div className="start-menu" onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside from closing */}
        {/* Header section with title and close button */}
        <div className="menu-header pixel-font">
          <h2 className="menu-title">Alexander OS</h2>
          <button className="close-button" onClick={onClose}>
            &times; {/* HTML entity for a multiplication sign (X) */}
          </button>
        </div>

        {/* Main Menu Content */}
        <div className="menu-content">
          {/* Mail Section */}
          <div className="menu-section">
            <h3 className="section-title pixel-font">Mail</h3>
            <ul className="section-list">
              <li>
                <button className="menu-item">
                  {/* Replaced emoji with React icon */}
                  <IoIosMail className="menu-icon" /> Inbox
                </button>
              </li>
            </ul>
          </div>

          {/* Settings Section */}
          <div className="menu-section">
            <h3 className="section-title pixel-font">Settings</h3>
            <ul className="section-list">
              <li>
                <button className="menu-item">
                  {/* Replaced emoji with React icon */}
                  <SiAudiomack className="menu-icon" /> Audio Settings
                </button>
              </li>
            </ul>
          </div>

          {/* You can add more sections here, e.g., "Projects", "About Me" */}
        </div>
      </div>
    </div>
  );
};

export default StartMenu;