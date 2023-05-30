import React from "react";
import { NavLink } from "react-router-dom";
import { NavItems, NavUl, NavLi, NavLogoImg } from "./NavItem.styled";
import styled from "styled-components";
import logo from "../../../../images/logo-img.png";
import { Container, Row, Collg12 } from "../../../../style/Base.styled";
import {
  FaRegHospital,
  FaUserMd,
  FaThumbsUp,
  FaPhoneAlt,
} from "react-icons/fa";

function NavItem() {
  return (
    <div>
      <NavItems>
        <NavLogoImg src={logo} />
        <NavUl>
          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/'
            >
              Home
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/about'
            >
              About Us
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/services'
            >
              Services
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/ourdoctors'
            >
              Our Doctors
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/blog'
            >
              Blog
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/contactus'
            >
              Contact Us
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to='/faq'
            >
              FAQ
            </NavLink>
          </NavLi>
        </NavUl>
      </NavItems>
      <SubBox>
        <Container>
          <Row>
            <Collg12>
              <WidgetWrapper>
                <HeaderWidget>
                  <HeaderIcon>
                    <FaRegHospital />
                  </HeaderIcon>
                  <HeaderContent>
                    <h3>Number 1 Hospital</h3>
                    <p>In United States</p>
                  </HeaderContent>
                </HeaderWidget>
                <HeaderWidget>
                  <HeaderIcon>
                    <FaUserMd />
                  </HeaderIcon>
                  <HeaderContent>
                    <h3>Personal Cabinet</h3>
                    <p>Qualified Staff</p>
                  </HeaderContent>
                </HeaderWidget>
                <HeaderWidget>
                  <HeaderIcon>
                    <FaThumbsUp />
                  </HeaderIcon>
                  <HeaderContent>
                    <h3>Get Result Online</h3>
                    <p>Satisfied Patients</p>
                  </HeaderContent>
                </HeaderWidget>
              </WidgetWrapper>
              <TelefonButton>
                <span style={{ paddingRight: "8px" }}>
                  <FaPhoneAlt />
                </span>
                Toll Free : 1 123 456 78910
              </TelefonButton>
            </Collg12>
          </Row>
        </Container>
      </SubBox>
    </div>
  );
}

export default NavItem;

const SubBox = styled.div`
  position: relative;
  padding-top: 19px;
  padding-bottom: 16px;
  background-color: #f9fafa;
`;
const WidgetWrapper = styled.div`
  float: left;
`;

const HeaderWidget = styled.div`
  display: table-cell;
  position: relative;
  vertical-align: middle;
  height: 100%;
  padding-right: 70px;
`;

const HeaderIcon = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.green};
  font-size: 18px;
  width: 50px;
  height: 50px;
  text-align: center;
  float: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const HeaderContent = styled.div`
  padding-left: 18px;
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  & h3 {
    color: ${({ theme }) => theme.colors.darkgreen};
    font-weight: 400;
  }
`;
const TelefonButton = styled.div`
  position: relative;
  padding-left: 20px;
  float: right;
  line-height: 48px;
  bottom: -18px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  background-color: #01d6a3;
  &::after {
    content: "";
    width: 5000px;
    height: 100%;
    left: 100%;
    top: 0px;
    background-color: #01d6a3;
    position: absolute;
  }
`;
