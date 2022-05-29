import React from 'react'
import {
  TestimonialSection,
  Name,
  Location,
  BodyText,
  Interaction,
  LocationWrapper,
  Img
} from './Testimonial.element'

const Testimonial = ({firstName, interaction, location, story}) => {
  return (
    <TestimonialSection className='ff-inter'>
      <Img src=""></Img>
      <Name>
        <h1 className='fw-600 text-name-gray'>{firstName}</h1>
      </Name>
      <LocationWrapper className='flex'>
         <Location className='fw-500'>{location}</Location>
         <Interaction>{interaction}</Interaction>     
      </LocationWrapper>
      <BodyText>
        <p>
          {story}
        </p>
      </BodyText>
    </TestimonialSection>
  )
}

export default Testimonial