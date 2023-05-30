import styled from "styled-components";

export const BgColor = styled.div`
  background-color: #f9fafa;
`;
export const Collg3 = styled.div`
  margin-top: -30px;
  margin-right: 15px;
  padding-top: 60px;
  padding-bottom: 70px;
  float: right;
  z-index: 1;
  position: relative;
  flex: 0 0 25%;
  max-width: 25%;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const TtmColWrapper = styled.div`
  margin-right: -15px;
  margin-left: -300px;
  width: auto;
  right: 0;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ContentArea = styled.div`
  margin-right: -30px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 65px;
  padding-bottom: 55px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 0 0 75%;
  max-width: 75%;
  position: relative;
  width: 100%;
`;

export const ServiceSingle = styled.div``;

export const ImgWrapper = styled.div`
  margin-bottom: 35px !important;
  & img {
    max-width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out 0s;
    vertical-align: middle;
    border-style: none;
  }
`;

export const ServiceDescription = styled.div`
  & h4 {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const Mb35 = styled.div`
  margin-bottom: 35px !important;
  & p {
    margin: 0 0 15px;
    font-size: 13px;
    font-weight: 400;
    line-height: 23px;
  }
`;

export const ColSm6 = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const UlList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

export const Listyl = styled.li`
  position: relative;
  padding-bottom: 7px;
  font-family: "Saira", Arial, Helvetica, sans-serif;
  & span {
    display: inline-block;
    padding-left: 30px;
    font-weight: 500;
    transition: all 0.5s ease-in-out 0s;
  }
`;

export const LinkWrapper = styled.div`
  & a {
    padding-right: 48px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    font-size: 13px;
    padding: 13px 30px 13px 30px;
    text-align: right;
    transition: all 0.3s ease-in-out 0s;
    margin-bottom: 20px !important;
    display: inline-block;
    line-height: normal;
    border: 1px solid transparent;
    position: relative;
    font-weight: 600;
    font-family: "Saira", Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 9;
    vertical-align: middle;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgreen};
    }
  }
  & svg {
    margin-left: 15px;
  }
`;

export const ForH = styled.h4`
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 15px;
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkgreen};
`;
