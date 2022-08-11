import React from 'react'
import LeftSidebar from '../left-sidebar/left-sidebar.component';
import { EducationContainer, EducationDuration, EducationMainText, EducationRightSidebar, EducationTypeAbout, EducationTypeName, InfoEducationContainer, InfoPart } from './education.style';
import {useSelector} from 'react-redux'
function Education() {
  let color = useSelector((state) => state);
  return (
    <EducationContainer>
      <LeftSidebar />
      <EducationRightSidebar>
        <EducationMainText color={color}>Education</EducationMainText>
        <InfoEducationContainer>
          <InfoPart color={color}>
            <EducationDuration>2007-2016</EducationDuration>
            <EducationTypeName>Secondary School</EducationTypeName>
            <EducationTypeAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              quidem.
            </EducationTypeAbout>
          </InfoPart>
          <InfoPart color={color}>
            <EducationDuration>2016-2019</EducationDuration>
            <EducationTypeName>Student of College</EducationTypeName>
            <EducationTypeAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              quidem.
            </EducationTypeAbout>
          </InfoPart>
          <InfoPart color={color}>
            <EducationDuration>2020-2024</EducationDuration>
            <EducationTypeName>Student of University</EducationTypeName>
            <EducationTypeAbout>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
              quidem.
            </EducationTypeAbout>
          </InfoPart>
        </InfoEducationContainer>
      </EducationRightSidebar>
    </EducationContainer>
  );
}

export default Education;