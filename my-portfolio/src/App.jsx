import React from 'react'
import Header from './Component/Header/Header'
import Navbar from './Component/Nav/Navbar'
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Services from './Component/Service/Services'
import Portfolio from './Component/Portfolio/Portfolio'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
// import './index.css'

const App = () => {
  return (
    // <div>App</div>
    <div>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App