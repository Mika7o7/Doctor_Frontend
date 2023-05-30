import React, { useState } from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Titlesec from "../../components/TitleSec/Titlesec";
import { Container, Section } from "../../style/Base.styled";
import blogimg1 from "../../images/blog/01.jpg";
import blogimg2 from "../../images/blog/02.jpg";
import blogimg3 from "../../images/blog/03.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const FAQ = () => {
  let props = {
    title: "Frequently Asked Questions",
    sub_title: "",
    point_of_place: "FAQ",
  };
  let data = {
    width: 900,
    title: "WHAT WE DO",
    secondTitle: "We Have 25 Years Experience",
    description: `We offer extensive medical procedures to outbound and
    inbound patients what it is and we are very proud of
    achievement of our stpatients for recovery Our Clinic has
    grown to provide a world class facility for the treatment of
    tooth loss, dental cosmetics and bore advanced restorative
    dentistry. We are among the most qualified implant providers
    in the AUS with over 30 years of quality training and
    experience`,
  };
  let faqdata = [
    {
      id: 1,
      title: "some Title",
      content: "someContent",
      image: blogimg1,
    },
    {
      id: 2,
      title: "some Title",
      content: "someContent",
      image: blogimg2,
    },
    {
      id: 3,
      title: "some Title",
      content: "someContent",
      image: blogimg3,
    },
    {
      id: 4,
      title: "some Title",
      content: "someContent",
      image: blogimg1,
    },
  ];
  const [isActive, setIsActive] = useState(null);
  return (
    <>
      <HeaderSub props={props} />
      <Section>
        <Container>
          <Titlesec data={data} />
          {faqdata.map((item) => (
            <AccordionBox ket={item.id}>
              <ToggleTitle
                onClick={() =>
                  setIsActive(isActive == item.id ? null : item.id)
                }
              >
                <h4>{item.title}</h4>
                <div>
                  {isActive === item.id ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </div>
              </ToggleTitle>
              {isActive === item.id && (
                <>
                  <div className='accordion-content'>{item.content}</div>
                  <h1>React Accordion Demo</h1>
                </>
              )}
            </AccordionBox>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default FAQ;

const ToggleTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin-top: 20px;
  & h4 {
    transition: all 0.3s ease-in-out 0s;
    font-family: "Saira", Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.darkgreen};
    font-weight: 600;
    position: relative;
  }
`;

const AccordionBox = styled.div``;
