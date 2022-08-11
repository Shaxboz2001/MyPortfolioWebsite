import React from 'react'
import LeftSidebar from '../left-sidebar/left-sidebar.component'
import { ExperienceContainer,ExperienceDuration,ExperienceMainText,ExperienceRightSidebar,ExperienceTypeAbout,ExperienceTypeName,InfoExperienceContainer,InfoPart } from './experience.style'
import {useSelector} from 'react-redux'
function Experience() {
  let color = useSelector((state) => state);
  return (
    <ExperienceContainer>
      <LeftSidebar />
      <ExperienceRightSidebar>
        <ExperienceMainText color={color}>Experience</ExperienceMainText>
        <InfoExperienceContainer>
          <InfoPart color={color}>
            <ExperienceDuration>2007-2016</ExperienceDuration>
            <ExperienceTypeName>Secondary School</ExperienceTypeName>
            <ExperienceTypeAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              quidem.
            </ExperienceTypeAbout>
          </InfoPart>
          <InfoPart color={color}>
            <ExperienceDuration>2016-2019</ExperienceDuration>
            <ExperienceTypeName>Student of College</ExperienceTypeName>
            <ExperienceTypeAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              quidem.
            </ExperienceTypeAbout>
          </InfoPart>
          <InfoPart color={color}>
            <ExperienceDuration>2020-2024</ExperienceDuration>
            <ExperienceTypeName>Student of University</ExperienceTypeName>
            <ExperienceTypeAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              quidem.
            </ExperienceTypeAbout>
          </InfoPart>
        </InfoExperienceContainer>
      </ExperienceRightSidebar>
    </ExperienceContainer>
  );
}

export default Experience