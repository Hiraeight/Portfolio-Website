import React, {useState} from 'react'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href='.header'>
        <img src='' alt='' />
      </a>

      {/* mobile navigation view */}
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "bar1" : ""}`}></div>
        <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
        <div className={`bar ${menuOpen ? "bar3" : ""}`}></div>
      </div>

      {/* navigation items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href='#skills' onClick={handleClick}>Skills</a>
        </li>
        <li>
          <a href='#projects' onClick={handleClick}>Projects</a>
        </li>
        <li>
          <a href='#about-me' onClick={handleClick}>About Me</a>
        </li>
        <li>
          <a href='#Contact' onClick={handleClick}>Contact</a>
        </li>
        <li>
          <a href='/' onClick={handleClick}>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav