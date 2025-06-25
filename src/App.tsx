import React, { useState } from 'react';

// Components
import Cursor from './components/Cursor/Cursor';
import Header from './components/Header/Header';
import About from './components/About/About';
import WhatIDo from './components/WhatIDo/WhatIDo';
import Connect from './components/Connect/Connect';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Taskbar from './components/Taskbar/Taskbar'; // Import the new Taskbar component

// Styles
import './App.css';

// Define the type for the page state
type Page = 'about' | 'what-i-do' | 'connect';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <About />;
      case 'what-i-do':
        return <WhatIDo />;
      case 'connect':
        return <Connect />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <Cursor />
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="content-container">
        {renderPage()}
      </main>
      <MusicPlayer />
      {/* Add the Taskbar component at the bottom */}
      <Taskbar />
    </div>
  );
};

export default App;
