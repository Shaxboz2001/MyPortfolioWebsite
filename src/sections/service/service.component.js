import React from "react";
import LeftSidebar from "../left-sidebar/left-sidebar.component";
import {
  ServiceContainer,
  ServiceContainerText,
  ServiceParagText,
  CardContainer,
  Projects,
  Statistics,
  StatisticsName,
  StatisticsNumber
} from "./service.style";
import ServiceCard from "./cards/card.component";
import { SiBmcsoftware } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { AiFillAppstore } from "react-icons/ai";
import { FaIdeal, FaShoppingCart } from "react-icons/fa";
import ProjectImgUrl from "./../../assets/images/projects.webp"
function Service() {
  return (
    <ServiceContainer>
      <LeftSidebar />
      <ServiceContainerText>
        <ServiceParagText>WHAT I DO?</ServiceParagText>
        <ServiceParagText>
          <span>HERE ARE SOME OF MY EXPERTISE</span>
        </ServiceParagText>
        <CardContainer>
          <ServiceCard logo={<SiBmcsoftware />} text="Software" color="blue" />
          <ServiceCard
            logo={<CgWebsite />}
            text="Web Development"
            color="#f9c03f"
          />
          <ServiceCard
            logo={<DiResponsive />}
            text="Responsive"
            color="#c28eca"
          />
          <ServiceCard
            logo={<FaIdeal />}
            text="Innovative Ideas"
            color="#2c98f0"
          />
          <ServiceCard
            logo={<AiFillAppstore />}
            text="Application"
            color="#f9c03f"
          />
          <ServiceCard
            logo={<FaShoppingCart />}
            text="Online Shopping"
            color="#2fa499"
          />
        </CardContainer>
        <Projects ProjectImgUrl={ProjectImgUrl}>
          <Statistics>
            <StatisticsNumber>309</StatisticsNumber>
            <StatisticsName>CUPS OF COFFEE</StatisticsName>
          </Statistics>
          <Statistics>
            <StatisticsNumber>356</StatisticsNumber>
            <StatisticsName>PROJECTS</StatisticsName>
          </Statistics>
          <Statistics>
            <StatisticsNumber>30</StatisticsNumber>
            <StatisticsName>CLIENTS</StatisticsName>
          </Statistics>
          <Statistics>
            <StatisticsNumber>10</StatisticsNumber>
            <StatisticsName>PARTNERS</StatisticsName>
          </Statistics>
        </Projects>
      </ServiceContainerText>
    </ServiceContainer>
  );
}

export default Service;
