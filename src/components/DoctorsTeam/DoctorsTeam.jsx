import React, { useRef } from "react";

import doctor from "../../images/doctor_2.jpg";
import { Container, Row } from "../../style/Base.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Collg10, ButtonsArea, ArrowButton } from "./DoctorsTeam.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import Titlesec from "../TitleSec/Titlesec";

const DoctorsTeam = () => {
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

  let data = {
    title: "MEET OUR EXPERIENCED TEAM",
    secondTitle: "Our Dedicated Doctors Team",
    description:
      "We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery",
  };
  const swiperRef = useRef();
  return (
    <Container>
      {/* <!-- row --> */}
      <Row>
        <Collg10>
          {/* <!-- section-title --> */}
          <Titlesec data={data} />

          {/* <!-- section-title end --> */}
        </Collg10>
        <ButtonsArea>
          <ArrowButton>
            <IoIosArrowBack onClick={() => swiperRef.current?.slidePrev()} />
          </ArrowButton>
          <ArrowButton>
            <IoIosArrowForward onClick={() => swiperRef.current?.slideNext()} />
          </ArrowButton>
        </ButtonsArea>
      </Row>
      {/* <!-- row end --> */}
      {/* <!-- row --> */}
      <Row>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          modules={[A11y, Autoplay]}
          loop={true}
          autoplay
          // loopedSlides={doctorsData.length}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {doctorsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <DoctorsCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Row>
      {/* !-- row end --> */}
    </Container>
  );
};

export default DoctorsTeam;
