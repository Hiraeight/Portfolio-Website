import React, { useState, useEffect } from 'react';
import wlogo from '../../images/logo/white_logo.gif';
import blogo from '../../images/logo/dark_logo_gif.gif';
import DarkModeToggle from './DarkModeToggle';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize dark mode state based on system preference or saved preference
  const [darkMode, setDarkMode] = useState(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : prefersDark;
  });

   // Automatically apply the dark mode class on initial render
   useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    setMenuOpen(false);
  };

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* Pass darkMode and toggleDarkMode to DarkModeToggle */}
      <button className="dark-mode-toggle-tab">
        <DarkModeToggle checked={darkMode} onChange={toggleDarkMode} />
      </button>

      {/* Logo switch based on dark mode */}
      <img src={darkMode ? wlogo : blogo} alt={darkMode ? "White Logo" : "Dark Logo"} className='header-logo' />

      {/* Mobile navigation view */}
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'bar2' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'bar3' : ''}`}></div>
      </div>

      {/* Navigation items */}
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
        <li>
          <a href='#certificates' onClick={handleClick}>Certificates</a>
        </li>
        <li>
          <a href='#projects' onClick={handleClick}>Projects</a>
        </li>
        <li>
          <a href='#skills' onClick={handleClick}>Skills</a>
        </li>
        <li>
          <a href='#about-me' onClick={handleClick}>About Me</a>
        </li>
        <li>
          <a href='#contact' onClick={handleClick}>Contact</a>
        </li>
        <li>
          <a href='https://www.canva.com/design/DAGTkLGA8vs/jfuzsMyDPOGfmq52KQldHg/view?utm_content=DAGTkLGA8vs&utm_campaign=designshare&utm_medium=link&utm_source=editor' rel="noreferrer" target='_blank' onClick={handleClick}>Resume</a>
        </li>
        <li>
          {/* Dark Mode Toggle Button */}
          <button className="dark-mode-toggle">
            <DarkModeToggle checked={darkMode} onChange={toggleDarkMode} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
