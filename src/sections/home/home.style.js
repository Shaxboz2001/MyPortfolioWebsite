import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100vw;
  background-color: #f8f3f9;
  min-height: 100vh;
@media screen and (max-width: 500px) {
  h1 {
    text-align: center;
     font-size: 1.5rem;
     line-height: normal;
  }
 
  p {
    font-size: 1rem;
    text-align: center;
  }
  a {
    font-size: 1rem;
  }

}
`;

export const HomeInfoText = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* margin-top: 8rem; */
  /* animation: textAnim 4s infinite linear forwards; */
  width: 76vw;
  min-height: 100vh;
  /* background: red; */

  @media screen and (max-width: 950px) {
    width: 100vw;
  }
`;
export const HeadText = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  color: rgba(2, 4, 56, 0.9);
`;
export const ParagText = styled.p`
  color: rgba(2, 4, 56, 0.9);
  & > a {
    color: #5fddff;
    text-decoration: none;
  }
  font-size: 1.3rem;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  background-color: ${props => props.color};
  opacity: .7;
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 800;
  letter-spacing: 2px;
  transition: all 400ms ease;
  display: flex;
  align-items: center;
  &:hover {
    transform: translateY(-10px);
    opacity: 1;
  }
`;
export const ImageContainer = styled.div`
  & > img {
    height: 400px;
    width: 400px;
    border-radius: 50%;
    border: 10px solid #fff;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 50vw;
      height: 50vw;
    }
  }
`;
