import React from 'react'

const SkillSet = () => {
  return (
    <div id='skills'>
      <section className='skills'>
        <div className='skills-header'>
          <h2>Skills</h2>
        </div>

        <article className='skills-category'>
          {
            skills.map(skills => <div key={skills.id} className='skills-card'>
              <div>
                <h3>{skills.category}</h3>
              </div>
              <div className='skills-image'>
              </div>
            </div>)
          }
        </article>
      </section>
    </div>
  )
}

export default SkillSet