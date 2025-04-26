import React, { useState } from 'react';
import '../styles/components/SidebarToggle.css';

const SidebarToggle = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  const SidebarContent = () => {
    return (
      <div className="sidebar-inner">
        <nav className="nav">
          <ul>
            <li><a href="#about" onClick={closeSidebar}>About</a></li>
            <li><a href="#experience" onClick={closeSidebar}>Experience</a></li>
            <li><a href="#skills" onClick={closeSidebar}>Skills</a></li>
            <li><a href="#projects" onClick={closeSidebar}>Projects</a></li>
            <li><a href="#certificates" onClick={closeSidebar}>Certificates</a></li>
            <li><a href="#contact" onClick={closeSidebar}>Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <div className="sidebar-toggle-container">
      <button 
        className="sidebar-toggle-button" 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar navigation"
      >
        <div className="dots-grid">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </button>

      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <button 
          className="close-button" 
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          ×
        </button>
        <div className="sidebar-content">
          <SidebarContent />
        </div>
        
        {/* GitHub Button - Positioned at the bottom */}
        <div className="sidebar-footer">
          <a 
            href="https://github.com/Madhavarora05" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {isSidebarVisible && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default SidebarToggle;