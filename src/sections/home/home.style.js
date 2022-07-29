import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100vw;
  background-color: #f8f3f9;
  height: 100vh;

`;

export const HomeInfoText = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* margin-top: 8rem; */
  /* animation: textAnim 4s infinite linear forwards; */
  width: 70vw;
  height: 100%;
  /* background: red; */
  @keyframes textAnim  {
    0%{
        transform: translateY(50px);
    }
    100%{
        transform: translateY(0);
    }
  }
`;
export const HeadText = styled.h1`
font-size: 3rem;
line-height: 4rem;
margin-bottom: 1rem;
`
export const ParagText = styled.p`
  color: #000;
  & > a {
    color: #5fddff;
    text-decoration: none;
  }
  font-size: 1.3rem;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  background-color: #909090;
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 800;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 10px solid #fff;
  }
`;