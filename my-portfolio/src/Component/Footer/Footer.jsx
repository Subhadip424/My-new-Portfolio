import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://www.instagram.com' target="_blank"><FaInstagramSquare/></a>
        <a href='https://www.facebook.com' target="_blank"><FaFacebook/></a>
      </div>
    </footer>
  )
}

export default Footer