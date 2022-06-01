import styled from 'styled-components'

export const TestimonialsSection = styled.section`
    border: 1px solid black;
    height: 100vw;
    padding-top: 5vw
`
export const TestimonialsWrapper = styled.div`
    padding: 0 10vw;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    grid-column-gap: 6px;
    grid-row-gap: 6px;
`