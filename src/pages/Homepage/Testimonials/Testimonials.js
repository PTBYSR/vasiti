import React, {  useState, useEffect} from 'react'
import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore'
import db from '../../../firebase'
import {
  TestimonialsSection,
  TestimonialsWrapper,
} from './Testimonials.element'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'user'))
    console.log(q)
    const unsub = onSnapshot(q, (querySnapshot) => {
      setTestimonials(
        querySnapshot.docs.map((doc) => ({
          data: doc.data()
        }))
      
    )})
    console.log(testimonials)
  },[])

  return (
    <TestimonialsSection>
      <TestimonialsWrapper>
      {testimonials.map((testimonial) => (
        <Testimonial
          firstName={testimonial.data.firstName}
          LastName={testimonial.data.lastName}
          story={testimonial.data.story}
          interaction={testimonial.data.interaction}
          location={testimonial.data.location}
        />
      ))}
        

      </TestimonialsWrapper>
    </TestimonialsSection>
  )
}

export default Testimonials