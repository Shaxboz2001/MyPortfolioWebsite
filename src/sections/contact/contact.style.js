import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  align-items: center;
  background-color: #f8f3f9;
  width: 100vw;
`;
export const ContactRightSidebar = styled.div`
  width: 76vw;
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem 1rem;
  justify-content: space-around;
  height: 100vh;
  @media screen and (max-width: 950px) {
    width: 100vw;
    padding: 2rem;
  }
`;
export const ContactMainText = styled.h1`
  color: rgba(2, 4, 56, 0.9);
  font-size: 2.5rem;
  font-weight: 900;
  position: relative;
  &::after {
    content: "";
    width: 60px;
    height: 6px;
    background-color: ${(props) => props.color};
    position: absolute;
    left: 0;
    bottom: -15px;
  }
  &::before {
    content: "";
    width: 40px;
    height: 6px;
    background-color: ${(props) => props.color};
    position: absolute;
    left: 0;
    bottom: -30px;
  }
`;

export const ContactTypeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
export const ContactType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  @media screen and (max-width: 650px) {
    flex-direction: row;
   align-items: baseline;
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
   align-items: center;
  }
`;
export const ContactTypeName = styled.h1`
  color: rgba(2, 4, 56, 0.9);
`;
export const ContactTypeLogo = styled.div``;
export const ContactTypeCode = styled.p`
  color: rgba(2, 4, 56, 0.9);
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TopContainerInputs = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const InputTop = styled.input`
  border: 0.5px solid #909090;
  outline: none;
  padding: 1rem;
  border-radius: 30px;
  width: 40%;
  color: rgba(2, 4, 56, 0.9);
  font-size: 1.2rem;
  &::placeholder {
    color: #909090;
    letter-spacing: 1px;
    font-weight: 100;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 650px) {
   width: 100%;
  }
`;
export const InputSubject = styled.input`
  border: 0.5px solid #909090;
  outline: none;
  padding: 1rem;
  border-radius: 30px;
  width: 100%;
  color: rgba(2, 4, 56, 0.9);
  font-size: 1.2rem;
  &::placeholder {
    color: #909090;
    letter-spacing: 1px;
    font-weight: 100;
    font-size: 1.2rem;
  }
`;
export const MessageText = styled.textarea`
  resize: none;
  border: 0.5px solid #909090;
  outline: none;
  padding: 1rem;
  border-radius: 30px;
  width: 100%;
  color: rgba(2, 4, 56, 0.9);
  font-size: 1.2rem;
  height: 150px;
  &::placeholder {
    color: #909090;
    letter-spacing: 1px;
    font-weight: 100;
    font-size: 1.2rem;
  }
`;

export const SendButton = styled.input`
  width: fit-content;
  border: none;
  outline: none;
  padding: 1rem 1.8rem;
  background-color: ${props => props.color};
  opacity: .8;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 400ms ease;
  &:hover {
    opacity: 1;
    transform: translateY(-10px);
  }
`;
