import React from "react";
import ArticlesNews from "../../components/ArticlesNews/ArticlesNews";
import DoctorsTeam from "../../components/DoctorsTeam/DoctorsTeam";
import InfoSection from "../../components/InfoSection/InfoSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import { FontStyles } from "../../style/fontStyles";

const Home = () => {
  return (
    <>
      <FontStyles />
      <InfoSection />
      <ServiceSection />
      <DoctorsTeam />
      <ArticlesNews />
    </>
  );
};

export default Home;
