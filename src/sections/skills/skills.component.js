import React from "react";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import {
  SkillsContainer,
  SkillsContainerText,
  SkillsHeadText,
  SkillsName,
  SkillsParagText,
  SkillsProgress,
  SkillsProgressContainer,
  SkillsProgressItems,
  SkillsProgressResult,
} from "./skills.style";

function Skills() {
  return (
    <SkillsContainer>
      <LeftSidebar />
      <SkillsContainerText>
        <SkillsParagText>MY SPECIALTY</SkillsParagText>
        <SkillsHeadText>MY SKILLS</SkillsHeadText>
        <SkillsParagText>
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </SkillsParagText>
        <SkillsProgress>
            <SkillsProgressItems>
                <SkillsName>HTML</SkillsName>
                <SkillsProgressContainer>
                    <SkillsProgressResult></SkillsProgressResult>
                </SkillsProgressContainer>
            </SkillsProgressItems>
            <SkillsProgressItems>
                <SkillsName>CSS</SkillsName>
                <SkillsProgressContainer>
                    <SkillsProgressResult></SkillsProgressResult>
                </SkillsProgressContainer>
            </SkillsProgressItems>
            <SkillsProgressItems>
                <SkillsName>BOOTSTRAP</SkillsName>
                <SkillsProgressContainer>
                    <SkillsProgressResult></SkillsProgressResult>
                </SkillsProgressContainer>
            </SkillsProgressItems>
            <SkillsProgressItems>
                <SkillsName>SASS</SkillsName>
                <SkillsProgressContainer>
                    <SkillsProgressResult></SkillsProgressResult>
                </SkillsProgressContainer>
            </SkillsProgressItems>
            <SkillsProgressItems>
                <SkillsName>JAVASCRIPT</SkillsName>
                <SkillsProgressContainer>
                    <SkillsProgressResult></SkillsProgressResult>
                </SkillsProgressContainer>
            </SkillsProgressItems>
            <SkillsProgressItems>
                <SkillsName>REACT</SkillsName>
                <SkillsProgressContainer>
                    <SkillsProgressResult></SkillsProgressResult>
                </SkillsProgressContainer>
            </SkillsProgressItems>
        </SkillsProgress>
      </SkillsContainerText>
    </SkillsContainer>
  );
}

export default Skills;
