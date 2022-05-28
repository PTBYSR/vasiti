import React from 'react'

const Testimonial = ({firstName, imgId}) => {
  return (
    <div>
        <div>
            {firstName}
        </div>
        <div>
            {imgId}
        </div>
    </div>
  )
}

export default Testimonial