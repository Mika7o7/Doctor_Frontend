import React from "react";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import NewsWidget from "../../components/NewsWidget/NewsWidget";
import Widget from "../../components/WidgetText/Widget";
import { Container, Row } from "../../style/Base.styled";
import blogimg1 from "../../images/blog/01.jpg";
import blogimg2 from "../../images/blog/02.jpg";
import blogimg3 from "../../images/blog/03.jpg";
import {
  BgColor,
  Collg3,
  ContentArea,
} from "../Services/ServiceContent/ServiceContact.styled";
import PostBox from "./PostBox/PostBox";
import {
  WidgetSearch,
  SearchForm,
  SearchLabel,
  SearchInput,
  SpecialHthree,
  Divrow,
} from "./Blog.styled";
import CategoryBox from "../../components/CategoryBox/CategoryBox";

const Blog = () => {
  let props = {
    title: "Blog",
    sub_title: "",
    point_of_place: "Blog Classic",
  };

  let newsdata = [
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
  ];
  let category = [
    {
      id: 1,
      name: "Blog Classic",
      url: "#",
    },
    {
      id: 2,
      name: "Neurology ",
      url: "#",
    },
    {
      id: 3,
      name: "Blog Services",
      url: "#",
    },
    {
      id: 4,
      name: "Blog Classic",
      url: "#",
    },
    {
      id: 5,
      name: "All Blog",
      url: "#",
    },
  ];
  return (
    <>
      <HeaderSub props={props} />
      <BgColor>
        <Container>
          <Row>
            <ContentArea>
              {newsdata.map((item) => (
                <PostBox key={item.id} data={item} />
              ))}
            </ContentArea>
            <Collg3>
              <Divrow>
                <div style={{ width: "2rem" }}></div>
                <div>
                  <WidgetSearch>
                    <SearchForm>
                      <SearchLabel>
                        <input type='text' placeholder='Search for:' />
                      </SearchLabel>
                      <SearchInput></SearchInput>
                    </SearchForm>
                  </WidgetSearch>
                  <SpecialHthree>Categories</SpecialHthree>

                  <CategoryBox data={category} />
                  <NewsWidget />
                  <Widget />
                </div>
              </Divrow>
            </Collg3>
          </Row>
        </Container>
      </BgColor>
    </>
  );
};

export default Blog;
