import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, NavLink, useParams } from "react-router-dom";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { DoctorsApi } from "../../Data/Doctors/Doctors";
import {
  TtmTeamMember,
  SocialLinks,
  TtmFeatuedWrapper,
  FeaturedThumbnail,
  FeaturedContent,
  TeamMembr,
  Appointment,
  TeamData,
  TeamWrapper,
  ListTitle,
  ListValue,
  Box,
  Serteficat,
  SerteficatWrapper,
  Md40,
  FeaturedIconBox,
  FeaturedIcon,
  FeaturedContents,
  FeaturedTitle,
  FeaturedDesc,
  Tabs,
  ContentTabs,
  P10,
  ContactForm,
  SpecialSpan,
  SpecialLi,
} from "./DoctorsMore.styled";
import { Container, Row, Section, Collg12 } from "../../style/Base.styled";
import {
  FaFacebookF,
  FaMedkit,
  FaPhoneAlt,
  FaTrophy,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import doctor2 from "../../images/doctor2.jpg";
import serteficat from "../../images/serteficate.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import Titlesec from "../../components/TitleSec/Titlesec";
import styled from "styled-components";
import { TbDental } from "react-icons/tb";

const DoctorsMore = () => {
  const userid = useParams();
  console.log(userid.id);
  const { isLoading, error, data } = useQuery(
    ["Doctors", userid.id],
    DoctorsApi
  );

  let props = {
    title: `${data?.user.first_name} ${data?.user.last_name}`,
    point_of_place: `${data?.user.first_name} ${data?.user.last_name}`,
  };
  let data2 = {
    // title: "MEET OUR EXPERIENCED TEAM",
    width: 700,
    secondTitle: "Overview",
    description:
      "We offer extensive medical Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery",
  };

  const [active, setActive] = useState(1);

  return (
    <>
      <HeaderSub props={props} />

      <Section>
        <Container>
          <Row>
            <Collg12>
              <Box>
                <TtmTeamMember>
                  <SocialLinks>
                    <ul>
                      <li>
                        <Link to=''>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          <AiFillInstagram />
                        </Link>
                      </li>
                    </ul>
                  </SocialLinks>
                  <Row>
                    <Collg12
                      style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}
                    >
                      <TtmFeatuedWrapper>
                        <FeaturedThumbnail>
                          <img src={doctor2} alt='' />
                        </FeaturedThumbnail>
                      </TtmFeatuedWrapper>
                    </Collg12>
                    <Collg12
                      style={{ flex: "0 0 58.333333%", maxWidth: "58.333333%" }}
                    >
                      <FeaturedContent>
                        <TeamMembr>
                          <h2>
                            Dr. {data?.user.first_name} {data?.user.last_name}
                          </h2>
                          <h5>Senior Dr. {data?.profession.title_en}</h5>
                          <Appointment>
                            <Link to=''>MAKE AN APPOINTMENT</Link>
                          </Appointment>
                          <TeamData>
                            <TeamWrapper>
                              <ul>
                                <li>
                                  <FaPhoneAlt />
                                  <ListTitle>Phone :</ListTitle>
                                  <ListValue>
                                    <Link to=''>{data?.user.phone}</Link>
                                  </ListValue>
                                </li>
                                <li>
                                  <AiOutlineMail />
                                  <ListTitle>Email :</ListTitle>
                                  <ListValue>
                                    <Link to=''>{data?.user.email}</Link>
                                  </ListValue>
                                </li>
                                <li>
                                  <TfiLocationPin />
                                  <ListTitle>Addres Info :</ListTitle>
                                  <ListValue>
                                    <Link to=''>{data?.user.address}</Link>
                                  </ListValue>
                                </li>
                              </ul>
                            </TeamWrapper>
                          </TeamData>
                        </TeamMembr>
                      </FeaturedContent>
                    </Collg12>
                  </Row>
                </TtmTeamMember>
              </Box>
              <TtmTeamMember>
                <Section>
                  <Row style={{ paddingTop: "5px !important" }}>
                    <Collg12
                      style={{ flex: "0 0 66.666667%", maxWidth: "66.666667%" }}
                    >
                      <Titlesec data={data2} />
                    </Collg12>
                    <Collg12
                      style={{ flex: "0 0 33.333333%", maxWidth: "33.333333%" }}
                    >
                      <Collg12>
                        <Serteficat>
                          <SerteficatWrapper>
                            <img src={serteficat} alt='' width={150} />
                            <img src={serteficat} alt='' width={150} />
                          </SerteficatWrapper>
                        </Serteficat>
                      </Collg12>
                    </Collg12>
                  </Row>
                </Section>
              </TtmTeamMember>
            </Collg12>
          </Row>
        </Container>
      </Section>

      <Section style={{ backgroundColor: "#f9fafa", padding: "80px 0" }}>
        <Container>
          <Row>
            <Collg12 style={{ flex: "0 0 50%", maxWidth: "50%" }}>
              <Md40>
                <h3>Honors and Awards</h3>
              </Md40>
              <FeaturedIconBox>
                <FeaturedIcon>
                  <div>
                    <FaTrophy />
                  </div>
                </FeaturedIcon>
                <FeaturedContents>
                  <FeaturedTitle>
                    <h5>2016 Doctor's Choice Award</h5>
                  </FeaturedTitle>
                  <FeaturedDesc>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      modi tempora incidunt ut labore et dolore.
                    </p>
                  </FeaturedDesc>
                </FeaturedContents>
              </FeaturedIconBox>
              <FeaturedIconBox>
                <FeaturedIcon>
                  <div>
                    <FaMedkit />
                  </div>
                </FeaturedIcon>
                <FeaturedContents>
                  <FeaturedTitle>
                    <h5>2016 Doctor's Choice Award</h5>
                  </FeaturedTitle>
                  <FeaturedDesc>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      modi tempora incidunt ut labore et dolore.
                    </p>
                  </FeaturedDesc>
                </FeaturedContents>
              </FeaturedIconBox>
            </Collg12>
            <Collg12 style={{ flex: "0 0 50%", maxWidth: "50%" }}>
              <div>
                <Tabs>
                  <SpecialLi>
                    <NavLink
                      onClick={() => setActive(1)}
                      className={active == 1 ? "activeli" : ""}
                      to=''
                    >
                      Education
                    </NavLink>
                  </SpecialLi>

                  <SpecialLi>
                    <NavLink
                      onClick={() => setActive(2)}
                      className={active == 2 ? "activeli" : ""}
                      to=''
                    >
                      Experience
                    </NavLink>
                  </SpecialLi>
                </Tabs>
                {active == 1 ? (
                  <ContentTabs>
                    <h5>Practical Degree From NY</h5>
                    <span>2016-2018</span>
                    <div>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni.
                      </p>
                    </div>
                    <h5>Practical Degree From NY</h5>
                    <span>2016-2018</span>
                    <div>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni.
                      </p>
                    </div>
                  </ContentTabs>
                ) : (
                  <ContentTabs>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni.
                    </p>
                  </ContentTabs>
                )}
              </div>
            </Collg12>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Collg12>
              <P10 style={{ paddingBottom: "10px !important" }}>
                <h3>Contact Me</h3>
              </P10>
              <ContactForm>
                <Row>
                  <Collg12 style={{ flex: "0 0 50%", maxWidth: "50%" }}>
                    <label
                      htmlFor=''
                      style={{
                        width: "100%",
                        margin: "0",
                        display: "inline-block",
                      }}
                    >
                      <SpecialSpan>
                        <input type='text' placeholder='Name: ' />
                      </SpecialSpan>
                    </label>
                  </Collg12>
                  <Collg12 style={{ flex: "0 0 50%", maxWidth: "50%" }}>
                    <label
                      htmlFor=''
                      style={{
                        width: "100%",
                        margin: "0",
                        display: "inline-block",
                      }}
                    >
                      <SpecialSpan>
                        <input type='text' placeholder='Email: ' />
                      </SpecialSpan>
                    </label>
                  </Collg12>
                </Row>
                <Row>
                  <Collg12 style={{ flex: "0 0 50%", maxWidth: "50%" }}>
                    <label
                      htmlFor=''
                      style={{
                        width: "100%",
                        margin: "0",
                        display: "inline-block",
                      }}
                    >
                      <SpecialSpan>
                        <input type='text' placeholder='Subject: ' />
                      </SpecialSpan>
                    </label>
                  </Collg12>
                  <Collg12 style={{ flex: "0 0 50%", maxWidth: "50%" }}>
                    <label
                      htmlFor=''
                      style={{
                        width: "100%",
                        margin: "0",
                        display: "inline-block",
                      }}
                    >
                      <SpecialSpan>
                        <input type='text' placeholder='Phone: ' />
                      </SpecialSpan>
                    </label>
                  </Collg12>
                </Row>
                <Row>
                  <Collg12>
                    <label
                      htmlFor=''
                      style={{
                        width: "100%",
                        margin: "0",
                        display: "inline-block",
                      }}
                    >
                      <SpecialSpan>
                        <textarea
                          name=''
                          id=''
                          cols='30'
                          rows='10'
                          placeholder='Message: '
                        ></textarea>
                      </SpecialSpan>
                    </label>
                  </Collg12>
                </Row>
                <input type='submit' valur='SUBMIT' />
              </ContactForm>
            </Collg12>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default DoctorsMore;
