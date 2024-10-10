import React from 'react'
import skills from './Skills'

const SkillSet = () => {
  return (
    <div id='skills'>
      <section className='skills'>
        <div className='skills-header'>
          <h2>Skills</h2>
        </div>

        <div className='skills-category'>
          {
            skills.map(skills => <div key={skills.id} className='skills-icon'>
              <div>
                <h3>{skills.category}</h3>
              </div>
              <div className='skills-image'>
                <img src={skills.image1} alt='' class="no-image" />
                <img src={skills.image2} alt='' class="no-image" />
                <img src={skills.image3} alt='' class="no-image" />
                <img src={skills.image4} alt='' class="no-image" />
                <img src={skills.image5} alt='' class="no-image" />
                <img src={skills.image6} alt='' class="no-image" />
              </div>
            </div>)
          }
        </div>
      </section>
    </div>
  )
}

export default SkillSet