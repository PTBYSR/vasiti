import styled from 'styled-components'

export const BannerSection = styled.section`
    border: 2px dashed blue;
    height: 42vw;
    padding: 0 10vw;
    position: relative;
    overflow: hidden;
    gap: 0rem;
    color: ${props => props.change ? props.change : "white"};
`
export const Ellipse = styled.img`
    border: 2px dashed blue;
    position: absolute;
    /* left: 109px; */
    bottom: -30px;
    width: 41vw;
`
export const Girls = styled.img`
    border: 2px dashed blue;
    position: absolute;
    width: 40vw;
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
    justify-content: space-around;
    padding: 5vw 0vw 5vw 6.5vw;
    gap: 0rem;
`
export const HeadingWrapper = styled.div`
    border: 1px solid green;
`
export const Share = styled.div`
    border: 1px solid green;
    position:relative;
`
export const Slash = styled.img`
    width: 14vw;
    position: absolute;
    left: -9px;
    bottom: -6px;
`
export const TextBody = styled.div`
    border: 1px solid green;
    height: 10vw
`
export const ShareBtn = styled.div`
    font-size: .97vw;
    letter-spacing: 0.2em;
    cursor: pointer;
`
export const Customer = styled.p`
    display: inline-block;
    padding: 5px 6px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin-top: 5px;
`