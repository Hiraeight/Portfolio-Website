import React, { useState } from 'react';
import lightmode from '../../images/mode/sun - w.png';
import darkmode from '../../images/mode/9035048_moon_icon.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleClick = () => {
    setMenuOpen(false);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode); // Toggle dark mode class
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle-tab">
        < img src={darkMode ? lightmode : darkmode} alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} />
      </button>

      <a href='.header'>
        <img src='' alt='logo' />
      </a>

      {/* Mobile navigation view */}
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "bar1" : ""}`}></div>
        <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
        <div className={`bar ${menuOpen ? "bar3" : ""}`}></div>
      </div>

      {/* Navigation items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
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
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            < img src={darkMode ? lightmode : darkmode} alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} />
          </button>
        </li>
      </ul>

    </nav>
  )
}

export default Nav;
