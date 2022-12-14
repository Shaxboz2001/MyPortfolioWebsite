import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
  align-items: center;
  background-color: #f8f3f9;
  width: 100vw;
`; 
export const AboutContainerText = styled.div`
  width: 76vw;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: space-around;
  min-height: 100vh;
  @media screen and (max-width: 950px) {
    width: 100vw;
    padding: 1rem;
  }
`;

export const AboutParagText = styled.p`
  display: flex;
  align-items: baseline;
  gap: 10px;
  & span {
    font-weight: bold;
    color: rgba(2, 4, 56, 0.9);
    font-size: 2rem;
    @media screen and (max-width: 650px) {
      margin: 1rem 0 0;
    }
  }
  & h3 {
    color: ${(props) => props.color};
    margin: 1rem 0;
  }
  color: #909090;
  width: 100%;
  @media screen and (max-width: 550px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const AboutHeadText = styled.h1`
  color: rgba(2, 4, 56, 0.9);
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;

  &::after {
    content: "";
    width: 60px;
    height: 6px;
    background-color: ${(props) => props.color};
    position: absolute;
    left: 0;
    bottom: -15px;
  }
  &::before {
    content: "";
    width: 40px;
    height: 6px;
    background-color: ${(props) => props.color};
    position: absolute;
    left: 0;
    bottom: -30px;
    right: 0;
  }
  @media screen and (max-width: 950px) {
    margin: 4rem 0;
  }
`;
export const CardContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
` 
export const AboutDetailContainer = styled.div`

`
export const AboutDetailLeft = styled.div`
display: flex;
`
export const AboutDetailRight = styled.div`
display: flex;
flex-direction: column;

`
export const DetailLeftTop = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;
export const DetailLeftTopLeft = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;
export const DetailLeftTopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`;
export const DetailLeftBottom = styled.div``;
export const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  border-bottom: 1px solid #909090;
  padding: .7rem 0;
  
`;
export const InfoName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  color: rgba(2, 4, 56, 0.9);
`;
export const InfoValue = styled.p`
font-size: 1.3rem;
`

export const AboutBtns = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
  text-align: center;
  @media screen and (max-width: 850px) {
    width:100%;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 450px) {
    width:100%;
    flex-direction: column;

  }
  & > a {
    padding: 1rem 1.2rem;
    background-color: ${(props) => props.color};
    opacity: 0.8;
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 30px;
    transition: all 400ms ease;
    &:hover {
      /* background-color: rgb(98, 14, 16); */
      opacity: 1;
      transform: translateY(-10px);
    }
  }
`;