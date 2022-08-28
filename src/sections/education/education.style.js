import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  align-items: center;
  background-color: #f8f3f9;
  width: 100vw;
`;
export const EducationRightSidebar = styled.div`
  width: 76vw;
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem 1rem;
  justify-content: space-around;
  height: 100vh;
  @media screen and (max-width: 950px) {
    width: 100vw;
    padding: 1rem;
  }
`;
export const EducationMainText = styled.h1`
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
  }
  @media screen and (max-width: 950px) {
    margin-top: 3rem;
  }
`;

export const InfoEducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  height: 80%;
  padding: 2rem;
  margin-top: 3rem;
  border-radius: 20px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  color: rgba(2, 4, 56, 0.9);
  overflow: auto;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const InfoPart = styled.div`
gap: 1rem;
display: flex;
/* justify-content: space-around; */
flex-direction: column;
border-left: 2px solid ${props => props.color};
height: calc(100% / 3);
padding-left: 2rem;
position: relative;
&::before {
  content: "";
  background-color: ${props => props.color};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: -10px;
}
`
export const EducationDuration = styled.p``
export const EducationTypeAbout = styled.p`

`
export const EducationTypeName = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
