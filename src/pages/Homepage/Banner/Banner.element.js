import styled from 'styled-components'

export const BannerSection = styled.section`
    border: 2px dashed blue;
    height: 42vw;
    padding: 0 10vw;
    position: relative;
    overflow: hidden;
    gap: 0rem;
    flex-direction: ${props => props.change ? "row-reverse" : "row"};
    background-color: ${props => props.change ? "var(--bg-light-pink)" : "var(--bg-gray)"};
`
export const Ellipse = styled.img`
    border: 2px dashed blue;
    position: absolute;
    /* left: 109px; */
    /* bottom: -30px; */
    bottom: ${props => props.change ? "-60px" : "-30px"};
    width: 41vw;
    right : ${props => props.change ? "150px" : ""};
`
export const Girls = styled.img`
    border: 2px dashed blue;
    position: absolute;
    /* width: 40vw; */
    width: ${props => props.change ? "40vw" : "40vw"};
    bottom: 0;
`
export const ImageSection = styled.div`
    border: 1px solid pink;
    width: 50%;
`
export const HeadingSection = styled.div`
    border: 1px solid green;
    width: 50%;
    flex-direction: column;
    /* justify-content: space-around; */
    padding: 5vw 0vw 5vw 6.5vw;
    gap: 2rem;
    color: ${props => props.change ? "var(--fc-top-nav)" : "var(--bg-white)"};
    padding: ${props => props.change ? "5vw 6.5vw 5vw 0vw" : "5vw 0vw 5vw 6.5vw"};
`
export const HeadingWrapper = styled.div`
    border: 1px solid green;
`
export const Share = styled.div`
    position:relative;
    margin-top: 1.5vw;
    `
export const Slash = styled.img`
    width: 18vw;
    position: absolute;
    left: -9px;
    bottom: -6px;
    `
export const TextBody = styled.div`
    border: 1px solid green;
    /* height: 10vw */
    `
export const ShareBtn = styled.div`
    font-size: 1.2vw;
    letter-spacing: 0.2em;
    cursor: pointer;
    color: ${props => props.change ? "var(--orange)" : ""}
    `
export const Customer = styled.p`
    display: inline-block;
    padding: .5vw .5vw;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border: ${props => props.change ? "1px solid var(--orange)" : "1px solid rgba(255, 255, 255, 0.4)"};
    border-radius: 4px;
    margin-top: 5px;
    color: ${props => props.change ? "var(--orange)" : "var(--fc-white)"};
    `