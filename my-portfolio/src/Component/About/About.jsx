import React from 'react'
import './about.css'
import ME from '../../assests/PPme.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me_image'>
            <img src={ME} alt=''/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <div className='about__card'>
              <h5>Experience</h5>
              <small>1 years Working</small>
            </div>

          </div>
        </div>

      </div>

    
    </section>
  )
}

export default About