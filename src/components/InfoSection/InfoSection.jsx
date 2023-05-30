import React from "react";
import info_img from "../../images/single.jpg";
import { Link } from "react-router-dom";
import { Section, Container, Row } from "../../style/Base.styled";
import {
  RowFirst,
  RowSeconDivHFive,
  RowSecondDiv,
  RowSecond,
  HFive,
  InfoBox,
  InfoBoxLarg,
  Span,
  InfoBoxButtonone,
  InfoBoxButtontwo,
} from "./InfoSection.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import Titlesec from "../TitleSec/Titlesec";

const InfoSection = () => {
  let data = {
    title: "OUR MEDICAL",
    secondTitle: "We’re Setting the Standards in Research & Clinical Care",
    description: `We provide the most full medical services, so every person could
    have the opportunity to receive qualitative medical help. Our
    Clinic has grown to provide a world class facility for the
    treatment of tooth loss, dental cosmetics and bore advanced
    restorative dentistry. We are among the most qualified implant
    providers in the USA with over 35 years of quality training and
    experience.`,
  };
  return (
    <Section>
      <Container>
        <Row>
          <RowFirst>
            <Titlesec data={data} />

            <HFive>Delmont Special Features</HFive>
            <Row>
              <InfoBox>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      color={"#01d6a3"}
                    />
                    <Span>Adult Trauma Center</Span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      color={"#01d6a3"}
                    />
                    <Span>Birthing and Lactation Classes</Span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      color={"#01d6a3"}
                    />
                    <Span>Dental and Oral Surgery</Span>
                  </li>
                </ul>
              </InfoBox>
              <InfoBox>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      color={"#01d6a3"}
                    />
                    <Span>Children's Trauma Center</Span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      color={"#01d6a3"}
                    />
                    <Span>Heart and Vascular Institute</Span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      color={"#01d6a3"}
                    />
                    <Span>Plastic Surgery</Span>
                  </li>
                </ul>
              </InfoBox>
              <InfoBoxLarg>
                <InfoBoxButtonone>
                  <Link to='#'>VIEW MORE</Link>
                </InfoBoxButtonone>
                <InfoBoxButtontwo>
                  <Link to='#'>CONTACT US!</Link>
                </InfoBoxButtontwo>
              </InfoBoxLarg>
            </Row>
          </RowFirst>
          <RowSecond>
            <img src={info_img} alt='' height={550} />
            <RowSecondDiv>
              <RowSeconDivHFive>
                We <FontAwesomeIcon icon={faHeart} color={"rgb(1, 214, 163)"} />{" "}
                To Care our
                <span
                  style={{
                    color: "#01d6a3",
                  }}
                >
                  {" "}
                  Patients !
                </span>
              </RowSeconDivHFive>
            </RowSecondDiv>
          </RowSecond>
        </Row>
      </Container>
    </Section>
  );
};

export default InfoSection;
