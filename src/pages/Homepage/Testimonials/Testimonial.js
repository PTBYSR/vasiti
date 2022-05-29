import React from 'react'
import {
  TestimonialSection,
  Name,
  Location,
  BodyText,
  Interaction,
  LocationWrapper
} from './Testimonial.element'

const Testimonial = ({firstName, interaction, location, story}) => {
  return (
    <TestimonialSection>
      <Name>
        <h1>{firstName}</h1>
      </Name>
      <LocationWrapper>
         <Location>{location}</Location>
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