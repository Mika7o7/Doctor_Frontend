import styled from "styled-components";

export const WidgetText = styled.aside`
  position: relative;
  margin: 40px 0 40px;
  display: block;
`;

export const WidgetInfo = styled.div`
  background-color: #01d6a3;
  color: rgba(255, 255, 255, 0.95);
  padding: 45px 30px;
  text-align: center;
  & > a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Icon = styled.div`
  font-size: 80px;
  padding-bottom: 25px;
`;

export const TitleH3 = styled.h3`
  & h3 {
    font-size: 29px;
    padding-bottom: 10px;
    color: #fff;
    margin-bottom: 0;
    line-height: 32px;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  & a {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }
`;
