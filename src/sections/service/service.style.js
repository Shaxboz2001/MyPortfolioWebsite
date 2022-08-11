import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f8f3f9;
  padding-top: 3rem;
`;
export const ServiceContainerText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-right: 2rem;
  margin-right: 8rem;
`;

export const ServiceParagText = styled.p`
  & span {
    font-weight: bold;
    color: #000;
  }
  color: #909090;
`;

export const ServiceHeadText = styled.h1`
  font-size: 2rem;
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
`
export const StatisticsNumber = styled.h1`
color: #fff;
`