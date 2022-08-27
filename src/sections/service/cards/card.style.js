import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 3rem;
  border-bottom: 2px solid ${(props) => props.color};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
  cursor: pointer;
  transition: all 400ms ease;
  &:hover {
    transform: translateY(-20px);
    background-color: rgba(90, 90, 0, 0.7);
    & > * {
      color: #fff !important;
    }
  }
  @media screen and (max-width: 550px) {
    width: 80%;
  }
`;
export const CardLogo = styled.div`
  background-color: ${(props) => props.color}!important;
  & > * {
    font-size: 3rem;
  }
  width: 150px;
  height: 150px;
  clip-path: polygon(26% 10%, 76% 10%, 100% 49%, 73% 90%, 27% 90%, 0% 50%);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const CardText = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #111155;
`;
