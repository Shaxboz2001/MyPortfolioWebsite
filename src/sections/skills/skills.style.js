import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
  align-items: center;
  background-color: #f8f3f9;
  width: 100vw;
 
`;
export const SkillsContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: #f8f3f9;
  width: 76vw;
  min-height: 100%;
  padding: 4rem;
  @media screen and (max-width: 950px) {
    width: 100vw;
    justify-content: center;
  }
`;

export const SkillsParagText = styled.p`
  & span {
    font-weight: bold;
    color: #000;
  }
  color: #909090;
  @media screen and (max-width: 950px) {
    margin-top: 3rem;
  }

`;

export const SkillsHeadText = styled.h1`
  font-size: 2rem;
  color: rgba(2, 4, 56, 0.9);
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 3rem;
`;

export const Projects = styled.div`
  /* width: 100%; */
  height: 300px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props) => props.ProjectImgUrl});
  margin-bottom: 2rem;
  background-position: center center;
  background-attachment: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;
export const StatisticsName = styled.h3`
  color: #fff4f499;
`;
export const StatisticsNumber = styled.h1`
  color: #fff;
`;

export const SkillsProgress = styled.div`

`
export const SkillsProgressItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: rgba(2, 4, 56, 0.9);
  @media screen and (max-width: 550px) {
    width: 70vw;
  }
`;
export const SkillsName = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(2, 4, 56, 0.9);
`;
export const SkillsProgressContainer = styled.div`
  width: 50vw;
  height: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 550px) {
    width: 70vw;
  }
`;
export const SkillsProgressResult = styled.div`
width: ${(props) => props.width}%;
background-color: ${props => props.color};
height: 10px;
border-radius: 10px;
`
export const SkillsResultPercent = styled.p``

export const SkillsTypeContainer = styled.div``