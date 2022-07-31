import React from 'react'
import './experience.css'
import {MdVerified} from 'react-icons/md'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        <div className='experience__backend'>
          <h3>Other Language</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>Powershell</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Begineer</small>
            </div>
          </article>
          <article className='experience__details'>
            <MdVerified className='experience__details-icon'/>
            <div>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>   
            </div>
          </article>
        </div>
        </div>
        

      </div>
    </section>
  )
}

export default Experience