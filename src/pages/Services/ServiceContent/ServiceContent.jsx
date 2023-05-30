import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Collg12, GridStyle } from "../../../style/Base.styled";
import NewsWidget from "../../../components/NewsWidget/NewsWidget";
import Widget from "../../../components/WidgetText/Widget";
import postfive from "../../../images/post-five-768x800.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FaRegFilePdf } from "react-icons/fa";
import SepHolderSection from "../../../components/SepHolder";
import DoctorsCard from "../../../components/DoctorsCard/DoctorsCard";
import doctor from "../../../images/doctor_2.jpg";
import {
  BgColor,
  Collg3,
  TtmColWrapper,
  ContentArea,
  ServiceSingle,
  ImgWrapper,
  ServiceDescription,
  Mb35,
  ColSm6,
  UlList,
  Listyl,
  LinkWrapper,
  ForH,
} from "./ServiceContact.styled";
import CategoryBox from "../../../components/CategoryBox/CategoryBox";

const ServiceContent = () => {
  let props = {
    title: "Professional medical service of Neurology",
    second_title: "Our Best Services Included",
    photo: postfive,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet odio non porta laoreet. Vestibulum in dui euismod, molestie quam porta, sagittis arcu. Pellentesque vitae pulvinar urna, in dignissim nulla. Mauris iaculis, tortor sed pharetra varius, purus augue feugiat purus,",
  };

  let Lilist = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  let data = [
    {
      id: 1,
      name: "Mikael Ohanyan",
      avatar: doctor,
      profession: [
        {
          id: 1,
          name: "Ginekolog",
        },
        {
          id: 2,
          name: "Pidiator",
        },
      ],
    },
    {
      id: 2,
      name: "Mikael Ohanyan",
      avatar: doctor,
      profession: [
        {
          id: 1,
          name: "Ginekolog",
        },
        {
          id: 2,
          name: "Pidiator",
        },
      ],
    },
    {
      id: 3,
      name: "Mikael Ohanyan",
      avatar: doctor,
      profession: [
        {
          id: 1,
          name: "Ginekolog",
        },
        {
          id: 2,
          name: "Pidiator",
        },
      ],
    },
  ];
  let category = [
    {
      id: 1,
      name: "Blog Classic",
      url: "#",
    },
    {
      id: 2,
      name: "Neurology ",
      url: "#",
    },
    {
      id: 3,
      name: "Blog Services",
      url: "#",
    },
    {
      id: 4,
      name: "Blog Classic",
      url: "#",
    },
    {
      id: 5,
      name: "All Blog",
      url: "#",
    },
  ];
  return (
    <BgColor>
      <Container>
        <Row>
          <Collg3>
            <TtmColWrapper></TtmColWrapper>
            <CategoryBox data={category} />
            <Widget />
            <NewsWidget />
          </Collg3>
          <ContentArea>
            <ServiceSingle>
              <Row>
                <Collg12>
                  <ImgWrapper>
                    <img src={props.photo} alt='' />
                  </ImgWrapper>
                  <ServiceDescription>
                    <h4>{props.title}</h4>
                    <SepHolderSection />
                    <Mb35>
                      <p>{props.text}</p>
                      <p>{props.text}</p>
                    </Mb35>
                    <h4>{props.second_title}</h4>
                    <SepHolderSection />
                    <Row
                      style={{
                        marginBottom: "15px !important",
                        marginTop: "15px !important",
                      }}
                    >
                      <ColSm6>
                        <UlList>
                          {Lilist.map((item, index) => (
                            <Listyl key={index}>
                              <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                color={"#01d6a3"}
                                style={{
                                  position: "absolute",
                                  left: "0px",
                                  top: "5px",
                                }}
                              />
                              <span>{item.title}</span>
                            </Listyl>
                          ))}
                        </UlList>
                      </ColSm6>
                      <ColSm6>
                        <UlList>
                          {Lilist.map((item, index) => (
                            <Listyl key={index}>
                              <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                color={"#01d6a3"}
                                style={{
                                  position: "absolute",
                                  left: "0px",
                                  top: "5px",
                                }}
                              />
                              <span>{item.title}</span>
                            </Listyl>
                          ))}
                        </UlList>
                      </ColSm6>
                    </Row>
                    <Row
                      style={{
                        marginBottom: "15px",
                        marginTop: "15px",
                      }}
                    >
                      <Collg12>
                        <Mb35>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam aliquet odio non porta laoreet.
                            Vestibulum in dui euismod, molestie quam porta,
                            sagittis arcu. Pellentesque vitae pulvinar urna
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit..
                          </p>
                        </Mb35>
                        <LinkWrapper>
                          <Link to=''>
                            Download PDF
                            <FaRegFilePdf />
                          </Link>
                        </LinkWrapper>
                      </Collg12>
                    </Row>
                  </ServiceDescription>
                  <Row
                    style={{
                      marginBottom: "-10px !important",
                      paddingTop: "15px !important",
                    }}
                  >
                    <Collg12>
                      <ForH>Our Special Doctors</ForH>
                      <SepHolderSection />
                      <GridStyle>
                        {data.map((item) => {
                          return <DoctorsCard key={item.id} data={item} />;
                        })}
                      </GridStyle>
                    </Collg12>
                  </Row>
                </Collg12>
              </Row>
            </ServiceSingle>
          </ContentArea>
        </Row>
      </Container>
    </BgColor>
  );
};

export default ServiceContent;
