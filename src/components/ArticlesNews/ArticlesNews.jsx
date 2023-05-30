import React from "react";
import { Link } from "react-router-dom";
import blogimg1 from "../../images/blog/01.jpg";
import blogimg2 from "../../images/blog/02.jpg";
import blogimg3 from "../../images/blog/03.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Collg4,
  Posts,
  PostBox,
  HFiveOfNews,
  Image,
  ImgDiv,
  TtmBoxDate,
  SpanData,
  Time,
  SpanDataSecond,
  TtmPost,
  FeaturedContentPost,
  FeaturedTitle,
  PostDesc,
  ReadButton,
} from "./ArticlesNews.styled";
import { Section, Collg9, Container, Row } from "../../style/Base.styled";
import Titlesec from "../TitleSec/Titlesec";

const ArticlesNews = () => {
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
  let data = {
    title: "OUR BLOG",
    secondTitle: "Recent Articles and News",
    description: `Since its founding Delmont has been providing its patients with
    the full medical care, encompassing outpatients services, is
    neurology, laboratory, imaging diagnostics and more.`,
  };

  return (
    <Section>
      <Container>
        {/* row */}
        <Row>
          <Collg9 style={{ padding: 0 }}>
            {/* <!-- section-title --> */}

            <Titlesec data={data} />
            {/* <!-- section-title end --> */}
          </Collg9>
          <Collg4 style={{ padding: 0 }}>
            <Link to=''>MORE ARTICLES</Link>
          </Collg4>
        </Row>
        {/* row end */}

        {/* row */}
        <Row>
          {/* post-slide */}
          <Posts>
            {newsdata.map((item) => (
              <PostBox>
                <TtmPost>
                  <ImgDiv>
                    <Image src={item.image} alt='' />
                  </ImgDiv>
                  <TtmBoxDate>
                    <SpanData>
                      <Time dateTime={item.year}>
                        {item.day}
                        <SpanDataSecond>
                          {item.month}
                          <SpanDataSecond>2023</SpanDataSecond>
                        </SpanDataSecond>
                      </Time>
                    </SpanData>
                  </TtmBoxDate>
                </TtmPost>
                <FeaturedContentPost>
                  <FeaturedTitle>
                    <HFiveOfNews>
                      <Link to=''>{item.name}</Link>
                    </HFiveOfNews>
                  </FeaturedTitle>

                  <PostDesc>
                    <p
                      styled={{
                        margin: "0 0 15px",
                      }}
                    >
                      {item.text}
                    </p>
                    <ReadButton>
                      <Link to=''>
                        READ MORE
                        <AiOutlineArrowRight />
                      </Link>
                    </ReadButton>
                  </PostDesc>
                </FeaturedContentPost>
              </PostBox>
            ))}
          </Posts>
        </Row>
        {/* row end*/}
      </Container>
    </Section>
  );
};

export default ArticlesNews;
