import React from 'react'
import projects from './myprojects'

const Projects = () => {

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
              <div className='more-info'>
                <p>hover for more info</p>
              </div>
              <div className="buttons-container">
                {/* Wireframe Button */}
                <a href={project.wireframe} rel="noreferrer" target="_blank">
                  <button className="projects-button">Wireframe</button>
                </a>

                {/* Prototype Button */}
                <a href={project.prototype} rel="noreferrer" target="_blank">
                  <button className="projects-button">Prototype</button>
                </a>

                {/* GitHub Button */}
                <a href={project.github} rel="noreferrer" target="_blank">
                  <button className="projects-button">Source Code</button>
                </a>

                {/* Live Demo Button */}
                <a href={project.live} rel="noreferrer" target="_blank">
                  <button
                    className="projects-button"
                    disabled={project.title === "My Portfolio"} // Disable button if project title is "My Portfolio"
                  >
                    Live Demo
                  </button>
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