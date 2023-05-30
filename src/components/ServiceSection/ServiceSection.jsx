import React from "react";
import { Link } from "react-router-dom";
import {
  Section,
  Container,
  Row,
  Collg9,
  Collg12,
} from "../../style/Base.styled";
import Titlesec from "../TitleSec/Titlesec";
import {
  Collg3,
  Mt10,
  Mt50,
  RowNoGutters,
  TtmIcon,
  FeaturedIconBox,
  FeaturedContent,
  ColMd3ColSm6,
  FeaturedTitle,
  FeaturedDesc,
  FeaturedIcon,
  Strong,
  Span,
} from "./ServiceSection.styled";

const ServiceSection = () => {
  let data = {
    title: "WE OFFER SERVICES",
    secondTitle: "Special High-quality Services",
    description: `Since its founding Delmont has been providing its patients with
    the full medical care, encompassing outpatients services, is
    neurology, laboratory, imaging diagnostics and more.`,
    color: "white",
  };
  return (
    <Section style={{ backgroundColor: "#033b4a", paddingTop: "7rem" }}>
      <Container>
        {/* <!-- row --> */}
        <Row>
          <Collg9>
            {/* <!-- section-title --> */}

            <Titlesec data={data} />
            {/* <!-- section-title end --> */}
          </Collg9>
          <Collg3>
            <Link to=''>MORE SERVICES</Link>
          </Collg3>
        </Row>
        {/* <!-- row end --> */}
        <Row>
          <Collg12>
            <Mt10>
              <RowNoGutters>
                <ColMd3ColSm6>
                  {/* <!--featured-icon-box--> */}
                  <FeaturedIconBox>
                    <FeaturedContent>
                      <FeaturedTitle>
                        <h5>Internists</h5>
                      </FeaturedTitle>
                      <FeaturedDesc>
                        <p>
                          For normal & complex disease. subspecialties in sleep
                          medicine, cancer etc.
                        </p>
                      </FeaturedDesc>
                    </FeaturedContent>
                    <FeaturedIcon>
                      <TtmIcon>
                        <i class='flaticon-doctor-1'></i>
                      </TtmIcon>
                    </FeaturedIcon>

                    <Link to=''>VIEW MORE</Link>
                  </FeaturedIconBox>
                  {/* <!-- featured-icon-box end--> */}
                </ColMd3ColSm6>
                <ColMd3ColSm6>
                  {/* <!--featured-icon-box--> */}
                  <FeaturedIconBox>
                    <FeaturedContent>
                      <FeaturedTitle>
                        <h5>Osteopaths</h5>
                      </FeaturedTitle>
                      <FeaturedDesc>
                        <p>
                          DOs are just like MDs. Recommend for a "whole body”
                          approach.
                        </p>
                      </FeaturedDesc>
                    </FeaturedContent>
                    <FeaturedIcon>
                      <TtmIcon>
                        <i class='flaticon-first-aid-kit'></i>
                      </TtmIcon>
                    </FeaturedIcon>
                    <Link to=''>VIEW MORE</Link>
                  </FeaturedIconBox>
                  {/* <!-- featured-icon-box end--> */}
                </ColMd3ColSm6>
                <ColMd3ColSm6>
                  {/* <!--featured-icon-box--> */}
                  <FeaturedIconBox>
                    <FeaturedContent>
                      <FeaturedTitle>
                        <h5>Oncologists</h5>
                      </FeaturedTitle>
                      <FeaturedDesc>
                        <p>
                          An Internists! to cure cancer, work with radiation
                          oncologists & surgeons.
                        </p>
                      </FeaturedDesc>
                    </FeaturedContent>
                    <FeaturedIcon>
                      <TtmIcon>
                        <i class='flaticon-patient-1'></i>
                      </TtmIcon>
                    </FeaturedIcon>
                    <Link to=''>VIEW MORE</Link>
                  </FeaturedIconBox>
                  {/* <!-- featured-icon-box end--> */}
                </ColMd3ColSm6>
                <ColMd3ColSm6>
                  {/* <!--featured-icon-box--> */}
                  <FeaturedIconBox>
                    <FeaturedContent>
                      <FeaturedTitle>
                        <h5>Podiatrists</h5>
                      </FeaturedTitle>
                      <FeaturedDesc>
                        <p>
                          The specialists who help with problems that affect
                          your feet or lower legs.
                        </p>
                      </FeaturedDesc>
                    </FeaturedContent>
                    <FeaturedIcon>
                      <TtmIcon>
                        <i class='flaticon-orthopedics'></i>
                      </TtmIcon>
                    </FeaturedIcon>
                    <Link to=''>VIEW MORE</Link>
                  </FeaturedIconBox>
                  {/* <!-- featured-icon-box end--> */}
                </ColMd3ColSm6>
              </RowNoGutters>
            </Mt10>
          </Collg12>
        </Row>
        <Row>
          <Collg12>
            <Mt50>
              <Strong>
                Don’t hesitate, contact us for better help and services.{" "}
                <Span class='ttm-textcolor-white'>
                  <Link to=''>Let’s get started</Link>
                </Span>
              </Strong>
            </Mt50>
          </Collg12>
        </Row>
      </Container>
    </Section>
  );
};

export default ServiceSection;
