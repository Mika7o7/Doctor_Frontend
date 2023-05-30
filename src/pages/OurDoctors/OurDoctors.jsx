import React from "react";
import DoctorsCard from "../../components/DoctorsCard/DoctorsCard";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Titlesec from "../../components/TitleSec/Titlesec";
import { Container, Section, GridStyle } from "../../style/Base.styled";
import doctor from "../../images/doctor_2.jpg";

const OurDoctors = () => {
  let props = {
    title: "Our Team",
    sub_title: "",
    point_of_place: "Our Team",
  };
  let data = {
    width: 930,
    size: 14,
    size2: 15,
    title: "MEET OUR EXPERIENCED TEAM",
    secondTitle: "Our Dedicated Doctors Team",
    description: `We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff,
     We are all work together to help our all patients for recovery`,
  };
  let doctorsData = [
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
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
  return (
    <>
      <HeaderSub props={props} />
      <Section>
        <Container>
          <Titlesec data={data} />
          <GridStyle>
            {doctorsData.map((item) => (
              <DoctorsCard key={item.id} data={item} />
            ))}
          </GridStyle>
        </Container>
      </Section>
    </>
  );
};

export default OurDoctors;
