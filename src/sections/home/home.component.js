import React from "react";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import { HeadText, HomeContainer, HomeInfoText, ImageContainer, Link, ParagText } from "./home.style";
import {AiOutlineDownload} from 'react-icons/ai'
import ImgUrl from './../../assets/images/myImage.jpg'
function Home() {
  return (
    <HomeContainer>
      <LeftSidebar />
      <HomeInfoText>
        <ImageContainer>
          <img src={ImgUrl} alt="" />
        </ImageContainer>
        <HeadText>I am</HeadText>
        <HeadText>a Front-End Developer</HeadText>
        <ParagText>You can read more information about this job</ParagText>
        <ParagText>
          in{" "}
          <a href="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html">
            frontend-developer
          </a>
          &nbsp; link
        </ParagText>
        <Link href="./../../assets/Ismoilov Shaxboz.pdf" download>
          Download My CV
          <AiOutlineDownload size={"30px"}/>
        </Link>
      </HomeInfoText>
    </HomeContainer>
  );
}

export default Home;
