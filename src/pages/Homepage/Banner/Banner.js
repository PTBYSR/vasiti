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
import pinkEllipse from './Ellipse-light-pink.png'
import woman from './woman-bag.png'

const Banner = ({change}) => {
  console.log(change, "caahnerrerer")
  return (
    <BannerSection change={change}className='flex'>
    <ImageSection>

      {change
        ? <Ellipse change={change}src={pinkEllipse}></Ellipse>
          // <Girls src={blackGirls}></Girls>
        :
        <Ellipse change={change}src={ellipse}></Ellipse>
        // <Girls src={blackGirls}></Girls>

      }

      {change
        // <Ellipse src={pinkEllipse}></Ellipse>
          ? <Girls change={change}src={woman}></Girls>
        :
        // <Ellipse src={ellipse}></Ellipse>
        <Girls change={change}src={blackGirls}></Girls>

      }
    </ImageSection>
    <HeadingSection change={change} className='ff-inter flex'>
      <HeadingWrapper>
        <h1 className='fw-700 ' style={{fontSize: "2.5vw", paddingTop: "1vw"}}>Tolu & Joy's Experience</h1>
        <Customer change={change}className="fw-500" style={{fontSize: ".85vw"}}>CUSTOMER</Customer>
      </HeadingWrapper>
      <TextBody>
        <p className="fw-400 fs-18" style={{fontSize:"1.2vw"}}>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
      </TextBody>
      <Share>
       <ShareBtn change={change}className="fw-500">SHARE YOUR STORY!</ShareBtn>
       <Slash src={slash} alt=""></Slash>
      </Share>
    </HeadingSection>
    </BannerSection>
  )
}

export default Banner