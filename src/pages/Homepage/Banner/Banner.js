import React from 'react'
import {
  BannerSection,
  ImageSection,
  HeadingSection,
  Ellipse,
  Girls
} from "./Banner.element"
import ellipse from './Ellipse.png'
import blackGirls from './black-girls.png'

const Banner = () => {
  return (
    <BannerSection className='bg-gray'>
    <ImageSection>
      <Ellipse src={ellipse}></Ellipse>
      <Girls src={blackGirls}></Girls>
    </ImageSection>
    <HeadingSection>

    </HeadingSection>
    </BannerSection>
  )
}

export default Banner