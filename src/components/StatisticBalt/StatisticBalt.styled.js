import styled from "styled-components";

export const TtmRowWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
`;

export const CollMd3 = styled.div`
  padding: 35px 0 30px;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
`;

export const TtmFid = styled.div`
  padding: 30px 0 2px;
  padding-left: 0;
  text-align: center;
  position: relative;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const TtmWrapperIcon = styled.div`
  margin-bottom: 0;
  width: 122px;
  height: 61px;
  line-height: 61px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  font-size: 40px;
`;

export const TtmWrapperContest = styled.div`
  text-align: center;
`;

export const SpetialSpan = styled.span`
  transition: all 0.5s ease-in-out 0s;
  font-size: 44px;
  line-height: 55px;
  font-weight: 600;
  text-align: center;
`;
