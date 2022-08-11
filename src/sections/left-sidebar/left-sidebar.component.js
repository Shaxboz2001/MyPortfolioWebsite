import React from "react";
import {
  CogIcon,
  FooterLeftSidebar,
  LeftSidebarContainer,
  NameText,
} from "./left-sidebar.style";
import { FaCog } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Colors from "../../components/Colors/colors.component";
import { useSelector } from "react-redux";


function LeftSidebar() {
  let color = useSelector((state) => state);
  return (
    <LeftSidebarContainer>
      <NameText color={color}>Shakhboz</NameText>
      <NavBar />
      <Colors />
      <FooterLeftSidebar>
        © Copyright 2022 All rights reserved
      </FooterLeftSidebar>
      <CogIcon>
        <FaCog />
      </CogIcon>
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
