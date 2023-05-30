import styled from "styled-components";
import { device } from "../../style/breakpoints";

export const Collg4 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  & > a {
    color: ${({ theme }) => theme.colors.darkgreen};
    background: transparent;
    font-size: 13px;
    padding: 13px 30px 13px 30px;
    transition: all 0.3s ease-in-out 0s;
    margin-bottom: 30px !important;
    margin-top: 45px !important;
    cursor: pointer;
    outline: medium none;
    float: right !important;
    display: inline-block;
    line-height: normal;
    border: 1px solid white;
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 9;
    vertical-align: middle;
    text-transform: capitalize;
    border: 1px solid ${({ theme }) => theme.colors.darkgreen};
    border-radius: 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgreen};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Posts = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PostBox = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
`;

export const HFiveOfNews = styled.h5`
  margin-top: 0;
  margin-bottom: 4px;

  & a {
    color: ${({ theme }) => theme.colors.darkgreen};
    font-size: 22px;
    line-height: 29px;
    font-weight: 500;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 300px;
`;

export const TtmBoxDate = styled.div`
  bottom: -30px;
  left: 20px;
  top: auto;
  height: 62px;
  width: 69px;
  position: absolute;
  font-weight: 500;
  font-size: 31px;
  line-height: 18px;
  padding-top: 13px;
  padding-bottom: 7px;
  z-index: 1;
  text-align: center;
  background-color: #01d6a3;
  color: ${({ theme }) => theme.colors.white};
`;

export const SpanData = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Time = styled.time``;

export const SpanDataSecond = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  text-transform: capitalize;
`;

export const TtmPost = styled.div`
  position: relative;
`;

export const FeaturedContentPost = styled.div`
  padding: 40px 20px 15px 20px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.gray};
  box-shadow: 0 0 15px 0 rgb(41 61 88 / 10%);
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.green};
  }
`;

export const FeaturedTitle = styled.div`
  user-select: none;
  height: 4rem;
`;

export const PostDesc = styled.div`
  padding-top: 13px;
  margin-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.gary};
`;

export const ReadButton = styled.div`
  & a {
    padding-right: 39px;
    color: ${({ theme }) => theme.colors.green};
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
    transition: all 0.3s ease-in-out 0s;
    margin-bottom: 15px !important;
    display: flex;
    gap: 10px;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
