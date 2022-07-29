import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
justify-content: flex-end;
height: 100vh;
align-items: center;
background-color: #fff;
` 
export const AboutContainerText = styled.div`
 width: 50%;
 display: flex;
 flex-direction: column;
 gap: 3rem;
 padding-right: 2rem;
 margin-right: 8rem;
`

export const AboutParagText = styled.p`
  & span {
    font-weight: bold;
    color: #000;
  }
  color: #909090;
`;

export const AboutHeadText = styled.h1`
font-size: 2rem;
`
export const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
` 