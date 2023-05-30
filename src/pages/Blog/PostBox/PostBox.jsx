import styled from "styled-components";

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const PostBox = ({ data }) => {
  return (
    <PostBoxStyled>
      <TtmPost>
        <TtmPostFeatured>
          <img src={data.image} alt='' />
        </TtmPostFeatured>
        <TtmBoxPostDate>
          <span>
            <time>
              {data.day}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  display: "inline-block",
                  textTransform: "capitalize",
                  transition: "all 0.5s ease-in-out 0s",
                }}
              >
                {data.month}
                <span
                  style={{
                    paddingLeft: "3px",
                    fontSize: "12px",
                    fontWeight: "400",
                    display: "inline-block",
                    textTransform: "capitalize",
                    transition: "all 0.5s ease-in-out 0s",
                  }}
                >
                  {data.year}
                </span>
              </span>
            </time>
          </span>
        </TtmBoxPostDate>
      </TtmPost>
      <TtmBlog>
        <TtmPostEntryHeader>
          <EntryHeader>
            <h2>
              <Link to=''>{data.name}</Link>
            </h2>
          </EntryHeader>
        </TtmPostEntryHeader>
        <EntryContent>
          <div>
            <p>{data.text}</p>
          </div>
          <Ttmblogbox>
            <div>
              <ButtonWrap>
                <Link to=''>READ MORE</Link>
              </ButtonWrap>
            </div>
            <SocialShear>
              <SocialTitle>Share Post</SocialTitle>
              <SocialIcons>
                <ul>
                  <li>
                    <Link to=''>
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to=''>
                      <FaGooglePlusG />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </SocialIcons>
            </SocialShear>
          </Ttmblogbox>
        </EntryContent>
      </TtmBlog>
    </PostBoxStyled>
  );
};

export default PostBox;

const PostBoxStyled = styled.article`
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 0;
  transition: all 0.5s ease-in-out 0s;
  display: block;
`;

const TtmPost = styled.div``;

const TtmBlog = styled.div`
  padding: 24px 0 30px;
`;

const TtmPostFeatured = styled.div`
  & img {
    max-width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out 0s;
    vertical-align: middle;
    border-style: none;
  }
`;

const TtmBoxPostDate = styled.div`
  height: 62px;
  width: 69px;
  position: absolute;
  top: 30px;
  left: 30px;
  font-weight: 500;
  font-size: 31px;
  line-height: 18px;
  padding-top: 13px;
  padding-bottom: 7px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green};
  bottom: -30px;
  & span {
    transition: all 0.5s ease-in-out 0s;
    font-weight: 500;
    font-size: 31px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

const TtmPostEntryHeader = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 21px;
`;

const EntryContent = styled.div``;

const EntryHeader = styled.header`
  display: block;
  & h2 {
    font-size: 30px;
    line-height: 38px;
    font-weight: 600;
    margin-bottom: 5px;
    & a {
      color: ${({ theme }) => theme.colors.darkgreen};
    }
  }
`;

const Ttmblogbox = styled.div`
  padding: 0;
  margin-top: 43px;
  margin-bottom: 0;
  clear: both;
  overflow: hidden;
`;

const SocialShear = styled.div`
  color: ${({ theme }) => theme.colors.darkgreen};
  float: right;
`;

const SocialTitle = styled.div`
  font-size: 17px;
  margin-top: 10px;
  margin-right: 3px;
  padding-right: 10px;
  position: relative;
  font-weight: 600;
  align-items: center;

  float: left;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

const SocialIcons = styled.div`
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  & ul {
    margin: 0;
    padding: 0;
    & li {
      margin: 6px 0 5px;
      display: inline-block;
      border: none;
      & a {
        border: 1px solid;
        height: 35px;
        cursor: pointer;
        width: 35px;
        line-height: 35px;
        text-align: center;
        display: block;
        background-color: transparent;
        font-size: 14px;
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.green};
        transition: all 0.3s ease-in-out 0s;
        &:hover {
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;
const ButtonWrap = styled.div`
  float: left;

  & a {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkgreen};
    border-radius: 0;
    font-size: 13px;
    transition: all 0.3s ease-in-out 0s;
    padding: 13px 30px 13px 30px;
    display: inline-block;
    line-height: normal;
    outline: medium none;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
    }
  }
`;
