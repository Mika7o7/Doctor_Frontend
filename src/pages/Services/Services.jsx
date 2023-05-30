import React from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import ServiceContent from "./ServiceContent/ServiceContent";

const Services = () => {
  let props = {
    title: "Neurology Service",
    sub_title: "",
    point_of_place: "Neurology Service",
  };
  return (
    <>
      <HeaderSub props={props} />
      <ServiceContent />
    </>
  );
};

export default Services;
