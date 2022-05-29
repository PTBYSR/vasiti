import React from 'react'
import {
  BannerSection,
  ImageSection,
  HeadingSection,
  Ellipse,
  Girls,
  HeadingWrapper,
  Share,
  ShareBtn,
  TextBody,
  Slash,
  Customer,
} from "./Banner.element"
import ellipse from './Ellipse.png'
import blackGirls from './black-girls.png'
import slash from './slash.svg'


const Banner = () => {
  return (
    <BannerSection className='bg-gray flex'>
    <ImageSection>
      <Ellipse src={ellipse}></Ellipse>
      <Girls src={blackGirls}></Girls>
    </ImageSection>
    <HeadingSection className='text-white text-white ff-inter flex'>
      <HeadingWrapper>
        <h1 className='fw-700 ' style={{fontSize: "2vw"}}>Tolu & Joy's Experience</h1>
        <Customer className="fw-500" style={{fontSize: ".8vw"}}>CUSTOMER</Customer>
      </HeadingWrapper>
      <TextBody>
        <p className="fw-400 fs-18" style={{fontSize:"1.2vw"}}>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
      </TextBody>
      <Share>
       <ShareBtn className="fw-500">SHARE YOUR STORY</ShareBtn>
       <Slash src={slash} alt=""></Slash>
      </Share>
    </HeadingSection>
    </BannerSection>
  )
}

export default Banner