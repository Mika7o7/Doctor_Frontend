import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import blogimg1 from "../../images/blog/01.jpg";
import blogimg2 from "../../images/blog/02.jpg";
import blogimg3 from "../../images/blog/03.jpg";

const NewsWidget = () => {
  let props = {
    title: "Our Latest News",
    newspage: [
      {
        id: 1,
        name: "How much aspirin to take for stroke",
        image: blogimg1,
        year: "2023",
        day: "24",
        month: "jan ",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      },
      {
        id: 2,
        name: "Mikael Ohanyan",
        image: blogimg2,
        year: "2023",
        day: "24",
        month: "jan ",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      },
      {
        id: 3,
        name: "Mikael Ohanyan",
        image: blogimg3,
        year: "2023",
        day: "24",
        month: "jan ",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      },
    ],
  };
  return (
    <WidgetConstPost>
      <Htrhee>{props.title}</Htrhee>
      <UlPost>
        {props.newspage.map((item, index) => (
          <li key={index}>
            <Link to=''>
              <img src={item.image} alt='' />
            </Link>
            <span>
              {item.day} {item.month} {item.year}{" "}
            </span>
            <Link to=''>{item.name}</Link>
          </li>
        ))}
      </UlPost>
    </WidgetConstPost>
  );
};

export default NewsWidget;

const WidgetConstPost = styled.div`
  margin-bottom: 20px;
  position: relative;
  margin: 40px 0 40px;
`;

const Htrhee = styled.h3`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  margin-bottom: 25px;
  padding-left: 26px;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

const UlPost = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & li {
    border-top: none;
    padding-top: 0;
    padding: 15px 0;
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
    height: 100px;
  }
  & li > span {
    display: block;
    font-size: 12px;
    transition: all 0.5s ease-in-out 0s;
  }
  & li > a {
    color: ${({ theme }) => theme.colors.darkgreen};
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    display: block;
    transition: all 0.3s ease-in-out 0s;
    outline: medium none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  & li > a > img {
    max-width: 70px;
    width: 100%;
    height: 70px;
    display: block;
    float: left;
    margin-right: 18px;
    transition: all 0.5s ease-in-out 0s;
    vertical-align: middle;
    border-style: none;
  }
`;
