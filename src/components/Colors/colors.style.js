import styled from "styled-components";

export const ColorContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`

export const ColorType = styled.div`
height: 30px;
width: 30px;
border-radius: 50%;
background-color: ${(props) => props.backColor};
cursor: pointer;
opacity: ${(props) => props.opacity};
`