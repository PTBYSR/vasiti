import styled from 'styled-components'

export const FooterSection = styled.footer`
    padding: 0 13.5vw;
    height: 50vw;
    border: 2px solid black;
    background-color: var(--bg-footer);
`
export const TopFooter = styled.div`
    border: 2px solid black;
    height: 45%;
    position: relative;
`
export const BottomFooter = styled.div`
    border: 2px solid pink;
    height: 55%;
    flex-direction: row;
    justify-content: space-between;
    gap:-rem;
`
export const HeadingSection = styled.div`
    border: 2px solid black;
`
export const Sub = styled.img`
    width: 26vw;
    position: absolute;
    bottom: 0;
    left: 50px;
`
export const FooterLinksSection = styled.div`
    border: 2px solid black;
`