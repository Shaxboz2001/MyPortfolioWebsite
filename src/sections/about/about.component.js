import React from "react";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import {
  AboutBtns,
  AboutContainer,
  AboutContainerText,
  AboutDetailContainer,
  AboutDetailLeft,
  AboutDetailRight,
  AboutHeadText,
  AboutParagText,
  DetailLeftBottom,
  DetailLeftTop,
  DetailLeftTopLeft,
  DetailLeftTopRight,
  InfoContainer,
  InfoName,
  InfoValue,
} from "./about.style";
import {useSelector}  from "react-redux"
function About() {
  let color = useSelector((state) => state);
  return (
    <AboutContainer>
      <LeftSidebar />
      <AboutContainerText>
        <AboutHeadText color={color}>ABOUT ME</AboutHeadText>
        <AboutParagText color={color}>
          <span>I am Shakhboz and </span> <h3>Web Developer</h3>
        </AboutParagText>
        <AboutParagText>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </AboutParagText>
        <AboutDetailContainer>
          <AboutDetailLeft>
            <DetailLeftTop>
              <DetailLeftTopLeft>
                <InfoContainer>
                  <InfoName>Birthday:</InfoName>
                  <InfoValue>3 February 2001</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoName>Website:</InfoName>
                  <InfoValue>www.shakhboz.com</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoName>Degree:</InfoName>
                  <InfoValue>Bachelours of E-commerce</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoName>City:</InfoName>
                  <InfoValue>Tashkent</InfoValue>
                </InfoContainer>
                <AboutBtns color={color}>
                  <a href="./../../assets/Ismoilov Shaxboz.pdf" download>
                    Download CV
                  </a>
                  <a href="mailto:ismoilovs674@gmail.com">Hire Me</a>
                </AboutBtns>
              </DetailLeftTopLeft>
              <DetailLeftTopRight>
                <InfoContainer>
                  <InfoName>Email:</InfoName>
                  <InfoValue>ismoilovs674@gmail.com</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoName>Phone Number:</InfoName>
                  <InfoValue>+998 (33) 397-76-46</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoName>Age:</InfoName>
                  <InfoValue>21</InfoValue>
                </InfoContainer>
                <InfoContainer>
                  <InfoName>Freelance:</InfoName>
                  <InfoValue>Available</InfoValue>
                </InfoContainer>
              </DetailLeftTopRight>
            </DetailLeftTop>
            <DetailLeftBottom></DetailLeftBottom>
          </AboutDetailLeft>
          <AboutDetailRight></AboutDetailRight>
        </AboutDetailContainer>
      </AboutContainerText>
    </AboutContainer>
  );
}

export default About;
