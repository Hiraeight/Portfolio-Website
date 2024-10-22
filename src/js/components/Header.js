import * as React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <section className='header-section'>
        <div className='header-content'>
          <h1>
            Hey! I'm <br/>
            John Patrick
          </h1>
          <h3>
            Front-End Developer Specializing in Clean and<br/>
            Responsive Web Solutions.
          </h3>
          <p>
            “I help agencies and startups build user-focused,<br/>
            scalable, and responsive websites using modern front-end<br/>
            technologies.”
          </p>
        </div>
        <div className='header-cta'>
          <a href='#projects'><button className='header-button'>View my projects</button></a>
          <a href='#contact'><button className='header-button'>Let's Collaborate</button></a>
        </div>
      </section>
    </header>
  )
}

export default Header