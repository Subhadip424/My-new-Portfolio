import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {HiInformationCircle} from 'react-icons/hi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'
import {MdWork} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><HiInformationCircle/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><RiCustomerService2Fill/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><FiPhoneCall/></a>
    </nav>
  )
}

export default Navbar