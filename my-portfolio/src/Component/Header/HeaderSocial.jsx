import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/subhadip-chowdhury-89837b187/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Subhadip424' target="_blank"><FaGithub/></a>

    </div>
  )
}

export default HeaderSocial