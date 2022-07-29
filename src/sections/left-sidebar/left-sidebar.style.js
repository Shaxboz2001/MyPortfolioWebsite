import React from 'react'
import styled from 'styled-components'

export const LeftSidebarContainer = styled.div`
  width: 30vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
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
export const NameText = styled.h1``
export const JobNameText = styled.p`
  color: #b8b8bd;
`;

export const FooterLeftSidebar = styled.p`
  width: 80%;
  color: #b8b8bd;
`;

