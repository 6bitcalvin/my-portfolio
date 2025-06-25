import React from 'react';
import './Header.css';

type Page = 'about' | 'what-i-do' | 'connect';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <button
              onClick={() => setActivePage('about')}
              className={activePage === 'about' ? 'active' : ''}
            >
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActivePage('what-i-do')}
              className={activePage === 'what-i-do' ? 'active' : ''}
            >
              What I Do
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActivePage('connect')}
              className={activePage === 'connect' ? 'active' : ''}
            >
              Connect
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
