import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  justify-content: space-around;
  border-bottom: 2px solid ${(props) => props.color};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-left: 2rem;
`;
export const CardLogo = styled.div`
  color: ${(props) => props.color}!important;
  & > * {
    font-size: 3rem;
  }
`;
export const CardText = styled.div`
font-size: 1.2rem;
font-weight: 400;
letter-spacing: 1px;
color: #111155;
`;
