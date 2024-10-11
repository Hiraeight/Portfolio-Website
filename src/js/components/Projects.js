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
                <a href={projects.wireframe} target='_blank'><button>Lo-Fi Design</button></a>
                <a href={projects.prototype} target='_blank'><button>Hi-Fi Design</button></a>
                <a href={projects.github} target='_blank'><button>Github</button></a>
                <a href={projects.live} target='_blank'><button>Live Demo</button></a>
              </div>
            </div>)
          }
        </article>
      </section>
    </div>
  )
}

export default Projects