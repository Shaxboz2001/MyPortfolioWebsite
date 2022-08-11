import React from "react";
import { useSelector } from "react-redux";
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
  SkillsResultPercent,
  SkillsTypeContainer,
} from "./skills.style";


function Skills() {
  let color = useSelector(state => state);
  return (
    <SkillsContainer>
      <LeftSidebar />
      <SkillsContainerText>
        <SkillsParagText>MY SPECIALTY</SkillsParagText>
        <SkillsHeadText>MY SKILLS</SkillsHeadText>
        <SkillsProgress>
          <SkillsTypeContainer>
            <SkillsProgressItems>
              <SkillsName>HTML</SkillsName>
              <SkillsResultPercent>90%</SkillsResultPercent>
            </SkillsProgressItems>
            <SkillsProgressContainer>
              <SkillsProgressResult width={90} color={color} />
            </SkillsProgressContainer>
          </SkillsTypeContainer>
          <SkillsTypeContainer>
            <SkillsProgressItems>
              <SkillsName>CSS</SkillsName>
              <SkillsResultPercent>92%</SkillsResultPercent>
            </SkillsProgressItems>
            <SkillsProgressContainer>
              <SkillsProgressResult width={92} color={color} />
            </SkillsProgressContainer>
          </SkillsTypeContainer>
          <SkillsTypeContainer>
            <SkillsProgressItems>
              <SkillsName>Bootstrap</SkillsName>
              <SkillsResultPercent>93%</SkillsResultPercent>
            </SkillsProgressItems>
            <SkillsProgressContainer>
              <SkillsProgressResult width={93} color={color} />
            </SkillsProgressContainer>
          </SkillsTypeContainer>
          <SkillsTypeContainer>
            <SkillsProgressItems>
              <SkillsName>SCSS</SkillsName>
              <SkillsResultPercent>83%</SkillsResultPercent>
            </SkillsProgressItems>
            <SkillsProgressContainer>
              <SkillsProgressResult width={83} color={color} />
            </SkillsProgressContainer>
          </SkillsTypeContainer>
          <SkillsTypeContainer>
            <SkillsProgressItems>
              <SkillsName>Javascript</SkillsName>
              <SkillsResultPercent>85%</SkillsResultPercent>
            </SkillsProgressItems>
            <SkillsProgressContainer>
              <SkillsProgressResult width={85} color={color} />
            </SkillsProgressContainer>
          </SkillsTypeContainer>
          <SkillsTypeContainer>
            <SkillsProgressItems>
              <SkillsName>React</SkillsName>
              <SkillsResultPercent>88%</SkillsResultPercent>
            </SkillsProgressItems>
            <SkillsProgressContainer>
              <SkillsProgressResult width={88} color={color} />
            </SkillsProgressContainer>
          </SkillsTypeContainer>
        </SkillsProgress>
        <SkillsParagText>
          Moreover, I am able to work with MySql,Ant Design,Git,Github,Gitlab
          and etc.
        </SkillsParagText>
      </SkillsContainerText>
    </SkillsContainer>
  );
}

export default Skills;
