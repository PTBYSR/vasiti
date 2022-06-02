import React from 'react'
import {
  FooterSection,
  TopFooter,
  BottomFooter,
  HeadingSection,
  FooterLinksSection,
  Sub
} from "./Footer.element"
import sub from './sub.png'

const Footer = () => {
  return (
    <FooterSection className=''>
      <TopFooter>
        <Sub src={sub}></Sub>
        <HeadingSection>

        </HeadingSection>
      </TopFooter>
      <BottomFooter className='flex'>
        <FooterLinksSection>

        </FooterLinksSection>
        <FooterLinksSection>

        </FooterLinksSection>
        <FooterLinksSection>

        </FooterLinksSection>
        <FooterLinksSection>

        </FooterLinksSection>
        <FooterLinksSection>

        </FooterLinksSection>
      </BottomFooter>
    </FooterSection>
  )
}

export default Footer