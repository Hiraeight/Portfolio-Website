import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <section>
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
            <button>View my projects</button>
            <button>Let's Collaborate</button>
          </div>
      </section>
    </header>
  )
}

export default Header