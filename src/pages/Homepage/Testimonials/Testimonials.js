import React, {  useState, useEffect} from 'react'
import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore'
import db from '../../../firebase'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'user'))
    const unsub = onSnapshot(q, (querySnapshot) => {
      setTestimonials(
        querySnapshot.docs.map((doc) => ({
          data: doc.data()
    }))
      )
    })
  },[])

  return (
    <div>
      {testimonials.map((testimonial) => (
        <Testimonial
          firstName={testimonial.data.firstName}
          LastName={testimonial.data.lastName}
          story={testimonial.data.story}
          location={testimonial.data.location}
        />
      ))}
    </div>
  )
}

export default Testimonials