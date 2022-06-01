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
         <Interaction className='fw-500'>{interaction}</Interaction>     
      </LocationWrapper>
      <BodyText>
        <p>
          {/* {story} */}
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
        </p>
      </BodyText>
    </TestimonialSection>
  )
}

export default Testimonial