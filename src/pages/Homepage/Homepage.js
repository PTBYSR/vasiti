import React from 'react'
import {
  LandingWrapper
} from './Homepage.element'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import Testimonials from './Testimonials/Testimonials'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'


const Homepage = () => {
  const changeValue = true
  return (
    <div>
      <LandingWrapper>
          <Nav />
          <Landing />
      </LandingWrapper>
        <Banner/>
        <Testimonials />
        <Banner change={true}/>
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Homepage


