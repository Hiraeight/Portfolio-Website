import React from 'react'
import projects from './myprojects'

const Projects = () => {
  const handleButtonClick = (project, type) => {
    if (project.underConstruction) {
      alert('This page is currently under construction.');
    } else {
      const url = project[type];
      if (url) {
        window.open(url, '_blank'); // Open link in a new tab
      }
    }
  };

  return (
    <div id='projects'>
      <section className='projects-top'>
        <div className='projects-header'>
          <h2>Projects</h2>
        </div>
      </section>
      <section className='projects-bottom'>
      <article className="projects-category">
          {projects.map((project) => (
            <div key={project.id} className="projects-card">
              <div className="projects-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="projects-image">
                <img src={project.tools1} alt={project.alt1} />
                <img src={project.tools2} alt={project.alt2} />
                <img src={project.tools3} alt={project.alt3} />
                <img src={project.tools4} alt={project.alt4} />
              </div>
              <div className="buttons-container">
                {/* Wireframe Button */}
                <button
                  className="projects-button"
                  onClick={() => handleButtonClick(project, 'wireframe')}
                >
                  Wireframe
                </button>

                {/* Prototype Button */}
                <button
                  className="projects-button"
                  onClick={() => handleButtonClick(project, 'prototype')}
                >
                  Prototype
                </button>

                {/* GitHub Button */}
                <button
                  className="projects-button"
                  onClick={() => handleButtonClick(project, 'github')}
                >
                  GitHub
                </button>

                {/* Live Demo Button */}
                <a href={project.live} rel="noreferrer" target="_blank">
                  <button className="projects-button">Live Demo</button>
                </a>
              </div>
            </div>
          ))}
        </article>
      </section>
    </div>
  )
}

export default Projects