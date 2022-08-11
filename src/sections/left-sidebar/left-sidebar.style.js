import styled from 'styled-components'

export const LeftSidebarContainer = styled.div`
  width: 24vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: 950px) {
    transform: translateX(-100vw);
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
right: 1rem;
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
`
