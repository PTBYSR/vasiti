import styled from 'styled-components'

export const LandingSection = styled.section`
    border: 1px pink solid;
    /* height: 640px; */
    height: 45vw;
    gap: 0rem;
    padding: 0 10vw;
    justify-content: space-between;
`
export const HeadingSection = styled.div`
    /* padding-left: 10vw ; */
    border: 1px solid black;
    /* width: 50%; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const ImageSection = styled.div`
    border: 4px solid blue;
    /* position: relative; */
    /* width: 50%; */
    padding-top: 20px
`
export const Heading = styled.h1`
    font-size: 3vw;
    line-height: 3.3vw;
    margin-bottom: 20px
`
export const SubHeading = styled.p`
    font-size: 1vw;
    margin-bottom: 20px;
    color: var(--fc-landing-gray)
`
export const Couple = styled.img`
    width: 40vw;
    border: 1px solid gray;
    position: absolute;
    right: 80px;
    bottom: 0;
`
export const Ellipse = styled.img`
   position: absolute;
   border: 2px solid green;
   right: 80px; 
   bottom: -145px; 
   width: 50vw
`