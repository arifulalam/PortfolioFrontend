import React from 'react'
import Header from './frontend/Header'
import Hero from './frontend/Hero'
import About from './frontend/About'
import Services from './frontend/Services'
import Resume from './frontend/Resume'
import Portfolio from './frontend/Portfolio'
import Testimonials from './frontend/Testimonials'
import Partners from './frontend/Partners'
import Blog from './frontend/Blog'
import Contact from './frontend/Contact'
import Footer from './frontend/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Partners/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home