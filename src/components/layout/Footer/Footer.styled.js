import styled from "styled-components";

export const FooterWidget = styled.div`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

export const FirstFooter = styled.div`
  padding: 40px 0 28px;
  background-color: #01d6a3;
`;

export const WidgetArea = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Aside = styled.div``;

export const IconWrapper = styled.div`
  margin-bottom: 15px;
  transition: all 0.5s ease-in-out 0s;
  position: relative;
`;

export const FeaturedIcon = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-right: 15px;
  transition: all 0.5s ease-in-out 0s;
  border: 1px solid white;
  align-items: center;
  text-align: center;
  padding: 10px 14px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
`;

export const FeaturedTitle = styled.div`
  padding-left: 10px;
  display: table-cell;
  vertical-align: middle;
`;

export const HFour = styled.h4`
  font-size: 14px;
  line-height: 18px;
  font-family: "Ubuntu", Arial, Helvetica;
  font-weight: 400;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const HFiveFooter = styled.h5`
  font-weight: 500;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 28px;
`;

export const BottomFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.darkgreen};
`;

export const SpanFooter = styled.span`
  & a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const UlFooter = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 25px;
  text-align: center;
  & li > a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
