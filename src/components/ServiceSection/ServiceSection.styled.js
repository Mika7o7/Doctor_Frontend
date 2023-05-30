import styled, { keyframes } from "styled-components";

export const Collg3 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  & > a {
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
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
    border: 1px solid ${({ theme }) => theme.colors.white};
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 9;
    vertical-align: middle;
    text-transform: capitalize;
    border-radius: 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.darkgreen};
    }
  }
`;

export const Mt10 = styled.div`
  margin-top: 10px !important;
`;

export const Mt50 = styled.div`
  margin-bottom: 50px !important;
  margin-top: 50px !important;
  text-align: center !important;
`;

export const RowNoGutters = styled.div`
  margin-right: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const TtmIcon = styled.div`
  margin-bottom: -10px;
  color: ${({ theme }) => theme.colors.green};
  height: 58px;
  font-size: 50px;
  width: 60px;
  line-height: 60px;
`;

export const BoxAnim = keyframes`
    0% {
    height: 20%;
    transition: all 5s ease-in-out 0s;
    }
    55% {
    height: 95%;
    
    }
    85%{
      height: 85%;
    }
    100%{
    
      height: 100%;
      background-color: #01d6a4;
    }
`;

export const FeaturedIconBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 40px 35px 20px 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out 0s;
  & a {
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    transition: all 0.3s ease-in-out 0s;
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 20px !important;
    padding: 0;
    background-color: transparent;
  }
`;

export const FeaturedContent = styled.div`
  background-color: transparent;
`;

export const ColMd3ColSm6 = styled.div`
  padding-right: 0;
  padding-left: 0;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  &:hover {
    & ${FeaturedIconBox} {
      animation: ${BoxAnim} 0.5s ease forwards;
    }
    & ${FeaturedContent} {
      color: ${({ theme }) => theme.colors.white};
    }
    & div > ${TtmIcon} {
      transition: all 0.3s ease-in-out 0s;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const FeaturedTitle = styled.div`
  & h5 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FeaturedDesc = styled.div`
  height: 68px;
`;

export const FeaturedIcon = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
  transition: all 0.5s ease-in-out 0s;
`;

export const Strong = styled.strong`
  font-weight: 600;
  font-family: "Saira", Arial, Helvetica, sans-serif;
`;

export const Span = styled.span`
  transition: all 0.5s ease-in-out 0s;
  & a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`;
