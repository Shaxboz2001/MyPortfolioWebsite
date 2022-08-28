import styled from 'styled-components'

export const LeftSidebarContainer = styled.div`
  width: 25vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  transition: all .32s linear;
  @media screen and (max-width: 950px) {
    transform: ${(props) =>
      props.transform ? "translateX(0)" : "translateX(-100vw)"};
    width: 60%;
    z-index: 21;
  }
  @media screen and (max-width: 620px) {
    width: 70%;
  }
  @media screen and (max-width: 440px) {
    width: 100%;
  }
`;

export const InfoLeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
export const InfoImage = styled.div`
& img {
    border-radius: 50%;
}
`
export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const NameText = styled.h1`
  color: rgba(2, 4, 56, 0.9);
  font-weight: 900;
  font-size: 2.5rem;
  position: relative;
  background-color: #fff;
  padding: 1rem;
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    position: absolute;
    z-index: -12;
    right: -10px;
    bottom: -10px;
  }
  &::before {
    content: "";
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.color};
    position: absolute;
    z-index: -12;
    left: -10px;
    top: -10px;
  }
`;
export const JobNameText = styled.p`
  color: #b8b8bd;
`;

export const FooterLeftSidebar = styled.p`
  width: 80%;
  color: #b8b8bd;
`;

export const ColorContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`

export const ColorType = styled.div`
height: 30px;
width: 30px;
border-radius: 50%;
background-color: ${(props) => props.backColor};
cursor: pointer;
`
export const CogIcon = styled.div`
animation: iconAnim 3s linear infinite;
position: fixed;
top: 1rem;
right: ${props => props.transform ? "-48vw" : "1rem"};
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
@keyframes iconAnim {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }

}
@media screen and (max-width: 650px) {
  display: none;
}
`
export const Burger = styled.div`
  display: none;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: all 0.32s ease;
  top: 20px;
  left: 20px;
  /* right: ${(props) => (props.transform ? "" : "-80%")}; */
  z-index: 450;
  &.active-burger > div:nth-child(1) {
    transform: translate(7px, 8px) rotate(45deg);
  }
  &.active-burger > div:nth-child(2) {
    display: none;
  }
  &.active-burger > div:nth-child(3) {
    transform: translate(7px, -8px) rotate(-45deg);
  }
  @media screen and (max-width: 950px) {
    display: flex;
  }
`;
export const BurgerLine = styled.div`
  width: 60px;
  height: 8px;
  background-color: ${(props) => props.color};
  transition: all 0.32s ease;
`;