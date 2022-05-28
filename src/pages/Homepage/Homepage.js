import React from 'react'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import Testimonials from './Testimonials/Testimonials'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'


const Homepage = () => {
  return (
    <div>
        <Nav />
        <Landing />
        <Banner />
        <Testimonials />
        <Banner />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Homepage


