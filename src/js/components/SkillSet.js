import React from 'react'
import skill from './skill'

const SkillSet = () => {
  return (
    <div id='skills'>
      <section className='skills'>
        <div className='skills-header'>
          <h2>Skills</h2>
        </div>

        <article className='skills-category'>
          {
            skill.map(skill => <div key={skill.id} className='skills-card'>
              <div>
                <h3>{skill.category}</h3>
              </div>
              <div className='skills-image'>
                <img src={skill.image1} alt={skill.alt1}  />
                <img src={skill.image2} alt={skill.alt2}  />
                <img src={skill.image3} alt={skill.alt3}  />
                <img src={skill.image4} alt={skill.alt4}  />
                <img src={skill.image5} alt={skill.alt5}  />
                <img src={skill.image6} alt={skill.alt6}  />
              </div>
            </div>)
          }
        </article>
      </section>
    </div>
  )
}

export default SkillSet