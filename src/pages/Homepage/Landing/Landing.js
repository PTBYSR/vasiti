import React from 'react'
import {
  LandingSection,
  HeadingSection,
  ImageSection,
  Heading,
  SubHeading,
  Couple,
  Ellipse,
} from './Landing.element'
import couple from './landing-image.png'
import ellipse from './Ellipse-light-pink.png'

const Landing = () => {
  return (
    <LandingSection className="flex">
      <HeadingSection className="flex">
        <div style={{width: "100%", paddingBottom: "10px"}}>
          <Heading className="ff-inter fw-700">
            Amazing <br /> Experiences from Our<br /> Wonderfull Customers
          </Heading>
        <SubHeading className='ff-inter'>Here is what customers and vendors are saying about us<br /> you can share your stories with us too.
        </SubHeading>
        </div>
      </HeadingSection>
      <ImageSection className=''>
        <Couple src={couple}></Couple>
        <Ellipse src={ellipse}></Ellipse>
      </ImageSection>
    </LandingSection>
  )
}

export default Landing