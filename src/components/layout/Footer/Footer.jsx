import React from "react";
import { Container, Row, Collg12 } from "../../../style/Base.styled";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FooterWidget,
  FirstFooter,
  WidgetArea,
  Aside,
  IconWrapper,
  FeaturedIcon,
  FeaturedTitle,
  HFour,
  HFiveFooter,
  BottomFooter,
  SpanFooter,
  UlFooter,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterWidget>
      <FirstFooter>
        <Container>
          <Row>
            <WidgetArea>
              <Aside>
                <IconWrapper>
                  <FeaturedIcon>
                    <FaPhoneAlt />
                  </FeaturedIcon>
                  <FeaturedTitle>
                    <HFiveFooter>+123 456 78910 / 11</HFiveFooter>
                    <HFour>Have a question? call us now</HFour>
                  </FeaturedTitle>
                </IconWrapper>
              </Aside>
            </WidgetArea>
            <WidgetArea>
              <Aside>
                <IconWrapper>
                  <FeaturedIcon>
                    <FaEnvelope />
                  </FeaturedIcon>
                  <FeaturedTitle>
                    <HFiveFooter>info@domainname.com</HFiveFooter>
                    <HFour>Need support? Drop us an email</HFour>
                  </FeaturedTitle>
                </IconWrapper>
              </Aside>
            </WidgetArea>
            <WidgetArea>
              <Aside>
                <IconWrapper>
                  <FeaturedIcon>
                    <FaClock />
                  </FeaturedIcon>
                  <FeaturedTitle>
                    <HFiveFooter>Mon – Sat 07:00 – 21:00</HFiveFooter>
                    <HFour>We are open on</HFour>
                  </FeaturedTitle>
                </IconWrapper>
              </Aside>
            </WidgetArea>
          </Row>
        </Container>
      </FirstFooter>
      <BottomFooter>
        <Container>
          <Row
            style={{
              paddingTop: "20px",
              paddingBottom: "19px",
              fontSize: "14px",
              lineHeight: "25px",
              textAlign: "center",
            }}
          >
            <Collg12>
              <SpanFooter>
                Copyright © 2019 Delmont Theme by{" "}
                <Link to='/'>ThemetechMount</Link>
              </SpanFooter>
            </Collg12>
            <Collg12>
              <UlFooter>
                <li
                  style={{
                    paddingLeft: "0",
                    display: "inline-block",
                    paddingRight: "16px",
                    paddingBottom: "0",
                    textAlign: "-webkit-match-parent",
                  }}
                >
                  <Link to=''>About Us</Link>
                </li>
                <li
                  style={{
                    paddingLeft: "0",
                    display: "inline-block",
                    paddingRight: "16px",
                    paddingBottom: "0",
                    textAlign: "-webkit-match-parent",
                  }}
                >
                  <Link to=''>Services</Link>
                </li>
                <li
                  style={{
                    paddingLeft: "0",
                    display: "inline-block",
                    paddingRight: "16px",
                    paddingBottom: "0",
                    textAlign: "-webkit-match-parent",
                  }}
                >
                  <Link to=''>Privacy</Link>
                </li>
              </UlFooter>
            </Collg12>
          </Row>
        </Container>
      </BottomFooter>
    </FooterWidget>
  );
}

export default Footer;
