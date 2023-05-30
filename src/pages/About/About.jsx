import React from "react";
import ContactAbout from "../../components/ContentAbout/ContentAbout";
import DoctorsTeam from "../../components/DoctorsTeam/DoctorsTeam";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import StatisticBalt from "../../components/StatisticBalt/StatisticBalt";

const About = () => {
  let props = {
    title: "About Us",
    sub_title: "About Our Hospital",
    point_of_place: "About Us",
  };
  return (
    <>
      <HeaderSub props={props} />
      <ContactAbout />
      <StatisticBalt />
      <DoctorsTeam />
    </>
  );
};

export default About;
