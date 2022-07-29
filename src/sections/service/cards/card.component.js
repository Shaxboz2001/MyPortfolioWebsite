import React from "react";
import { CardLogo, CardText, CardContainer } from "./card.style";

function AboutCard(props) {
  return (
    <CardContainer color={props.color}>
      <CardLogo color={props.color}>{props.logo}</CardLogo>
      <CardText>{props.text}</CardText>
    </CardContainer>
  );
}

export default AboutCard;
