import React from 'react';
import logo from '../../images/logo/dark_logo_gif.gif';
import linkedin from '../../images/social logo/linkedin-w.png';
import github from '../../images/social logo/github-w.png';
import gmail from '../../images/social logo/gmail-w.png';
import instagram from '../../images/social logo/instagram-w.png';
import facebook from '../../images/social logo/facebook-w.png';

const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <img src={logo} alt='' className='footer-logo' />
        <h3>Find me on the web:</h3>
        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/johnpatrickfelicia/' rel="noreferrer" target='_blank'><img src={linkedin} alt='LinkedIn' /></a>
          <a href='https://github.com/Hiraeight' rel="noreferrer" target='_blank'><img src={github} alt='GitHub' /></a>
          <a href="mailto:johnpatrickdfelicai@gmail.com" rel="noreferrer" target='_blank'><img src={gmail} alt='Gmail' /></a>
          <a href='https://www.instagram.com/jp.felicia/' rel="noreferrer" target='_blank'><img src={instagram} alt='Instagram' /></a>
          <a href='https://www.facebook.com/JohnPatrickFelicia' rel="noreferrer" target='_blank'><img src={facebook} alt='Facebook' /></a>
        </div>
        <p>This website was made by John Patrick Felicia © 2024</p>
      </section>
    </div>
  )
}

export default Footer