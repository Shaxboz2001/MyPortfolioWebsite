import React, { useState } from "react";
import {
  Burger,
  BurgerLine,
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
  const [transform, setTransform] = useState(false);
  if (window.innerWidth > 950) {
    // setTransform(false);
    console.log(transform);
    // console.log("katta");
  }
  return (
    <>
      <Burger
        onClick={() => {
          setTransform(!transform);
          console.log("bosildi");
        }}
        transform={transform}
        className={transform ? "active-burger" : ""}
      >
        <BurgerLine color={color} />
        <BurgerLine color={color} />
        <BurgerLine color={color} />
      </Burger>
      <CogIcon transform={transform}>
        <FaCog />
      </CogIcon>
      <LeftSidebarContainer transform={transform}>
        <NameText color={color}>Shakhboz</NameText>
        <NavBar />
        <Colors />
        <FooterLeftSidebar>
          © Copyright 2022 All rights reserved
        </FooterLeftSidebar>
      </LeftSidebarContainer>
    </>
  );
}

export default LeftSidebar;
