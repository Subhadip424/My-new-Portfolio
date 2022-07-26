import React from 'react'
import './about.css'
import ME from '../../assests/PPme.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 years Working</small>
            </div>

            <div className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ </small>
            </div>

            <div className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </div>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed corrupti dolorem alias delectus cum quo provident voluptatem ut quaerat praesentium esse reprehenderit officiis qui voluptate optio animi, cumque reiciendis iusto eligendi earum fuga atque ea nostrum! Maxime, magni dolores.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          
        </div>

      </div>

    
    </section>
  )
}

export default About