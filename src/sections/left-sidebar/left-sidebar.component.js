import React from "react";
import {
  FooterLeftSidebar,
  InfoImage,
  InfoLeftSideBar,
  InfoText,
  JobNameText,
  LeftSidebarContainer,
  NameText,
} from "./left-sidebar.style";
import ImgUrl from "./../../assets/images/myImage.jpg";
import NavBar from "../../components/NavBar";
function LeftSidebar() {
  return (
    <LeftSidebarContainer>
      <InfoLeftSideBar>
        <InfoImage>
          <img src={ImgUrl} width="200px" alt="Shaxboz" />
        </InfoImage>
        <InfoText>
          <NameText>Ismoilov Shaxboz</NameText>
          <JobNameText>Front-End Developer in Uzbekistan</JobNameText>
        </InfoText>
      </InfoLeftSideBar>
      <NavBar />
      <FooterLeftSidebar>
        © Copyright ©2022 All rights reserved | This template is made with by
        Colorlib Demo Images: Unsplash.com
      </FooterLeftSidebar>
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
