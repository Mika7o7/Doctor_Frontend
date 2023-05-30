import React from "react";
import styled from "styled-components";

const SepHolderSection = () => {
  return (
    <SepHolder>
      <SepHolderSpan>
        <SepLine></SepLine>
      </SepHolderSpan>
      <SepHolderSpan>
        <SepLine></SepLine>
      </SepHolderSpan>
    </SepHolder>
  );
};

export default SepHolderSection;

const SepHolder = styled.div`
  margin-bottom: 20px !important;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

const SepHolderSpan = styled.span`
  height: 1px;
  position: relative;
  flex: 1 1 auto;
  min-width: 10%;
  transition: all 0.5s ease-in-out 0s;
`;

const SepLine = styled.span`
  border-color: #ebebeb;
  height: 1px;
  border-top: 1px solid #f2f2f2;
  display: block;
  position: relative;
  top: 1px;
  width: 100%;
  transition: all 0.5s ease-in-out 0s;
`;
