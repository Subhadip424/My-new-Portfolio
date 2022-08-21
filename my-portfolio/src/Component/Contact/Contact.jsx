import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3z8xs7a', 'template_uskslak', form.current, 'R1R22VgvaQjHQrpUz')

    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
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
      <form ref={form} onSubmit={sendEmail}>
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