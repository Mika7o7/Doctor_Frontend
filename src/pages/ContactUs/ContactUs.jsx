import React from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import { Container, Row, Section } from "../../style/Base.styled";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Titlesec from "../../components/TitleSec/Titlesec";
import {
  ColLg5,
  ColLg7,
  BgColor,
  LyerContent,
  SepHolderBox,
  SepHolder,
  SepLine,
  FeaturedBoxIcon,
  FeaturedContainer,
  FeaturedIcon,
  FeaturedTitle,
  TtmIcon,
  BgColorYes,
  SpecialForm,
  Input,
  InputReal,
} from "./ContactUs.styled";

const ContactUs = () => {
  let props = {
    title: "Contact Us",
    sub_title: "",
    point_of_place: "Contacts",
  };
  let ContactData = [
    {
      id: 1,
      title: "58 BalSouth Lane,Harward Street",
      icon: <FaMapMarkerAlt />,
      place: "NewYork 33025",
    },
    {
      id: 2,
      title: "58 BalSouth Lane,Harward Street",
      icon: <FaEnvelope />,
      place: "NewYork 33025",
    },
    {
      id: 3,
      title: "58 BalSouth Lane,Harward Street",
      icon: <FaPhoneAlt />,
      place: "NewYork 33025",
    },
    {
      id: 4,
      title: "58 BalSouth Lane,Harward Street",
      icon: <FaClock />,
      place: "NewYork 33025",
    },
  ];
  let data = {
    title: "MEET OUR EXPERIENCED TEAM",
    secondTitle: "Our Dedicated Doctors Team",
    description:
      "We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery",
  };
  return (
    <>
      <HeaderSub props={props} />
      <Section>
        <Container>
          <Row>
            <ColLg5>
              <BgColor>
                <div></div>
                <LyerContent>
                  <h3>
                    Do You want to Reach at the next Level of business Success?
                  </h3>
                  <p>
                    Book a Complimentary Appointment by Visiting or calling Us!
                  </p>
                  <SepHolderBox>
                    <SepHolder>
                      <SepLine></SepLine>
                    </SepHolder>
                    <SepHolder>
                      <SepLine></SepLine>
                    </SepHolder>
                  </SepHolderBox>
                  {ContactData.map((item) => (
                    <FeaturedBoxIcon>
                      <FeaturedContainer>
                        <FeaturedIcon>
                          <TtmIcon>{item.icon}</TtmIcon>
                        </FeaturedIcon>

                        <FeaturedTitle>
                          <h5>{item.title}</h5>
                          <h4>{item.place}</h4>
                        </FeaturedTitle>
                      </FeaturedContainer>
                    </FeaturedBoxIcon>
                  ))}
                </LyerContent>
              </BgColor>
            </ColLg5>
            <ColLg7>
              <BgColorYes>
                <Titlesec data={data} />
                <SpecialForm>
                  <label htmlFor=''>
                    <Input>
                      <InputReal placeholder='Your Name'></InputReal>
                    </Input>
                  </label>
                  <label htmlFor=''>
                    <Input>
                      <InputReal placeholder='Call Phone'></InputReal>
                    </Input>
                  </label>
                  <label htmlFor=''>
                    <Input>
                      <InputReal placeholder='Email'></InputReal>
                    </Input>
                  </label>
                  <label htmlFor=''>
                    <Input>
                      <InputReal placeholder='Message'></InputReal>
                    </Input>
                  </label>
                  <input type='submit' />
                </SpecialForm>
              </BgColorYes>
            </ColLg7>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default ContactUs;
