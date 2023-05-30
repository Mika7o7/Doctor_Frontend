import React from "react";
import {
  SectionTitle,
  TitleHeader,
  TitleDesc,
  TitleHTwo,
} from "../../style/Base.styled";

const Titlesec = ({ data }) => {
  return (
    <SectionTitle>
      <TitleHeader>
        <h5 style={{ fontSize: `${data.size}px` }}>{data.title}</h5>
        <TitleHTwo colorName={data.color}>{data.secondTitle}</TitleHTwo>
      </TitleHeader>
      <TitleDesc
        style={{ fontSize: `${data.size2}px`, width: `${data.width}px` }}
      >
        {data.description}
      </TitleDesc>
    </SectionTitle>
  );
};

export default Titlesec;
