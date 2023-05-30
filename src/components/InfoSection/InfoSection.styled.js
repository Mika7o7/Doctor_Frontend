import styled from "styled-components";

export const RowFirst = styled.div`
  max-width: 50%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const RowSeconDivHFive = styled.h5`
  font-family: "Saira", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 21px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const RowSecondDiv = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkgreen};
  padding-bottom: 10px !important;
  margin-top: -58px !important;
  margin-left: 99px;
  padding-top: 15px !important;
  padding-left: 45px !important;
  z-index: 1;
  height: 55px;
  width: 407px;
  top: 0;
  left: 0;
`;

export const RowSecond = styled.div`
  max-width: 50%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
`;

export const HFive = styled.h5`
  font-size: 20px;
  line-height: 25px;
  font-family: "Saira", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

export const InfoBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
  & ul > li {
    align-items: center;
    display: flex;
    justify-content: left;
  }
`;

export const InfoBoxLarg = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  font-family: "Ubuntu", Tahoma, Geneva, sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0px;
`;

export const Span = styled.span`
  display: inline-block;
  font-weight: 500;
  margin-left: 10px;
  align-items: center;
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0px;
`;

export const InfoBoxButtonone = styled.div`
  margin-top: 25px !important;
  margin-right: 25px;
  padding: 13px 30px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  > a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
  }
  &:hover > a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const InfoBoxButtontwo = styled.div`
  margin-top: 25px !important;
  margin-right: 25px;
  padding: 13px 30px;
  background-color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  > a {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
  }
  &:hover > a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
