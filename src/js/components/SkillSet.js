import React from 'react'
import skills from './skills'

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
                <img src={skills.image1} alt=''  />
                <img src={skills.image2} alt=''  />
                <img src={skills.image3} alt=''  />
                <img src={skills.image4} alt=''  />
                <img src={skills.image5} alt=''  />
                <img src={skills.image6} alt=''  />
              </div>
            </div>)
          }
        </article>
      </section>
    </div>
  )
}

export default SkillSet