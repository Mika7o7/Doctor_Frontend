import styled from "styled-components";
import bg_img from "../../images/ttm-pagetitle-bg.jpg";

export const HeaderWrapper = styled.div`
  display: block;
  padding-top: 95px;
  padding-bottom: 85px;
  z-index: 11;
  position: relative;
  background-image: url(${bg_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TitleBox = styled.div`
  display: table;
  width: 100%;
  color: #fff;
`;
export const PageTitle = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const Breadcrumb = styled.div`
  text-align: right;
  display: table-cell;
  vertical-align: middle;
  color: #fff;
`;

export const BreadcrumbIner = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  padding: 15px;
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  & span > a {
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Title = styled.div`
  font-weight: 600;
  text-transform: capitalize;
  font-size: 47px;
  line-height: 50px;
  margin-bottom: 6px;
  position: relative;
  color: #fff;
`;
