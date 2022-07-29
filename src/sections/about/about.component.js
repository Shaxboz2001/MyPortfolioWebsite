import React from "react";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import {
  AboutContainer,
  AboutContainerText,
  AboutHeadText,
  AboutParagText,
  CardContainer,
} from "./about.style";
import AboutCard from "./cards/card.component";
import { SiBmcsoftware } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";

function About() {
  return (
    <AboutContainer>
      <LeftSidebar />
      <AboutContainerText>
        <AboutParagText>ABOUT US</AboutParagText>
        <AboutHeadText>WHO AM I?</AboutHeadText>
        <AboutParagText>
          <span>Hi I'm Jackson Ford</span> On her way she met a copy. The copy
          warned the Little Blind Text, that where it came from it would have
          been rewritten a thousand times and everything that was left from its
          origin would be the word "and" and the Little Blind Text should turn
          around and return to its own, safe country.
        </AboutParagText>
        <AboutParagText>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </AboutParagText>
        <CardContainer>
          <AboutCard logo={<SiBmcsoftware />} text="Software" color="blue" />
          <AboutCard
            logo={<CgWebsite />}
            text="Web Development"
            color="#f9c03f"
          />
          <AboutCard
            logo={<DiResponsive />}
            text="Responsive"
            color="#c28eca"
          />
        </CardContainer>
      </AboutContainerText>
    </AboutContainer>
  );
}

export default About;
