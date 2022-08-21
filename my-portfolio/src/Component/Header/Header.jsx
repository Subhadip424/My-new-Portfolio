import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/casualme.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Subhadip Chowdhury</h1>
        <h5 className='text-light'>React Dveloper</h5>
        <CTA></CTA>
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <div>
          <a href='#about' className='scroll__down'>Scroll Down</a>
        </div>

      </div>
    </header>
    
  )
}

export default Header