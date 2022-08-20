import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
      <article className='contact__option'>
        <MdOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>subhadipchowdhury1998@gmail.com</h5>
        <a href='mailto:subhadipchowdhury1998@gmail.com' target='_blank'> Send a message</a>
      </article>
      <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+91 7908309248</h5>
        <a href='https://api.whatsapp.com/send?phone=7908309248' target='_blank'> Send a message</a>
      </article>
      </div>

      {/* END OF CONTACT OPTION */}
      <form action=''>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" id='' rows='7' placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact