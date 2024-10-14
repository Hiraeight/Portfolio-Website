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
        <article className='projects-category'>
          {
            projects.map(projects => <div key={projects.id} className='projects-card'>
              <div className='projects-info'>
                <h3>{projects.title}</h3>
                <p>{projects.description}</p>
              </div>
              <div className='projects-image'>
                <img src={projects.tools1} alt='' />
                <img src={projects.tools2} alt='' />
                <img src={projects.tools3} alt='' />
                <img src={projects.tools4} alt='' />
              </div>
              <div className='buttons-container'>
                <a href={projects.wireframe} rel="noreferrer" target='_blank'><button className='projects-button'>Wireframe</button></a>
                <a href={projects.prototype} rel="noreferrer" target='_blank'><button className='projects-button'>Prototype</button></a>
                <a href={projects.github} rel="noreferrer" target='_blank'><button className='projects-button'>Github</button></a>
                <a href={projects.live} rel="noreferrer" target='_blank'><button className='projects-button'>Live Demo</button></a>
              </div>
            </div>)
          }
        </article>
      </section>
    </div>
  )
}

export default Projects