import styled from "styled-components";

export const TtmTeamMember = styled.div`
  position: relative;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: block;
  clear: both;
  position: absolute;
  left: 19px;
  top: 127px;
  z-index: 1;
  & ul {
    list-style: none;
    font-size: 15px;
    & li {
      display: block;
      margin-bottom: 10px;
      border: none;
      list-style: none;

      & a {
        border: 1px solid transparent;
        height: 36px;
        width: 36px;
        line-height: 36px;
        text-align: center;
        display: block;
        background-color: ${({ theme }) => theme.colors.darkgreen};
        color: ${({ theme }) => theme.colors.white};
        font-size: 14px;
        border-radius: 50%;
      }
    }
  }
`;

export const TtmFeatuedWrapper = styled.div`
  margin-left: 60px;
`;

export const FeaturedThumbnail = styled.div`
  & img {
    max-width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out 0s;
    vertical-align: middle;
    border-style: none;
  }
`;

export const FeaturedContent = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  margin-left: -30px;
  padding: 46px 25px 40px 60px;
`;

export const TeamMembr = styled.div`
  position: relative;
  margin: 0;
`;

export const Appointment = styled.div`
  position: absolute;
  right: 15px;
  top: 0;
  & a {
    text-transform: uppercase;
    padding: 11px 34px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 0;
    font-size: 13px;
    transition: all 0.3s ease-in-out 0s;
    margin-bottom: 20px !important;
    display: inline-block;
    line-height: normal;
    border: 1px solid transparent;
    position: relative;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 9;
    vertical-align: middle;
    text-decoration: none;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgreen};
    }
  }
`;

export const TeamData = styled.div`
  border-top: 1px solid #f2f2f2;
  padding-top: 35px;
  margin-top: 25px;
`;

export const TeamWrapper = styled.div`
  & ul {
    margin: 0;
    padding: 0;
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    & li {
      position: relative;
      padding: 3px 0 6px 0;
      font-size: 15px;
      line-height: 24px;
      list-style-type: none;

      display: block;
      float: left;
      width: 100%;
      box-sizing: border-box;
      text-align: -webkit-match-parent;
      & svg {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;
export const ListTitle = styled.div`
  margin-right: 8px;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding-left: 26px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.darkgreen};
`;

export const ListValue = styled.div`
  display: inline-block;
  font-size: 15px;
  line-height: 24px;
  & a {
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Serteficat = styled.div`
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  z-index: 1;
`;

export const SerteficatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  gap: 10px;
`;

export const Md40 = styled.div`
  margin-bottom: 40px !important;
  & h3 {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 15px;
    margin-top: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const FeaturedIconBox = styled.div`
  display: table;
  margin-bottom: 15px;
  transition: all 0.5s ease-in-out 0s;
  position: relative;
`;

export const FeaturedIcon = styled.div`
  vertical-align: top;
  display: table-cell;
  transition: all 0.5s ease-in-out 0s;
  & div {
    height: 54px;
    width: 54px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: -10px;
    border-radius: 50%;
    line-height: 45px;
    background-color: ${({ theme }) => theme.colors.green};
    display: inline-block;
    text-align: center;
    border: 2px solid transparent;

    -webkit-transition: all 0.4s ease-in-out;
    box-sizing: content-box;
    position: relative;
    & svg {
      font-size: 25px;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
    }
  }
`;

export const FeaturedContents = styled.div`
  padding-left: 15px;
  display: table-cell;
  vertical-align: middle;
  transition: all 0.5s ease-in-out 0s;
`;

export const FeaturedTitle = styled.div`
  & h5 {
    font-size: 19px;
    line-height: 22px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const FeaturedDesc = styled.div`
  & p {
    margin: 0 0 15px;
    text-align: left;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const ContentTabs = styled.div`
  margin-top: 20px;
  width: 100%;
  & h5 {
    font-size: 19px;
    line-height: 26px;
    margin: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkgreen};
  }
  & span {
    color: ${({ theme }) => theme.colors.green};
    transition: all 0.5s ease-in-out 0s;
  }
  & div {
    margin-bottom: 25px !important;
    & p {
      margin: 0 0 15px;
    }
  }
`;

export const P10 = styled.div`
  & h3 {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const ContactForm = styled.form`
  display: block;
  margin-top: 0em;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: left;
  & input {
    background-color: ${({ theme }) => theme.colors.green};
    text-transform: uppercase;
    padding: 11px 34px;
    font-weight: 600;
    border-radius: 0;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    line-height: 21px;
    border: 2px solid transparent;
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.25s ease;
    outline: none !important;
    -webkit-font-smoothing: antialiased;
    margin-top: 10px !important;
    font-family: "Saira", Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    overflow: hidden;
    z-index: 9;
    vertical-align: middle;
    position: relative;
    -webkit-appearance: button;
    margin: 0;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-align: center;
    &:hover {
      background: ${({ theme }) => theme.colors.darkgreen};
    }
  }
`;

export const SpecialSpan = styled.span`
  margin-bottom: 15px;
  display: block;
  padding-top: 5px;
  position: relative;
  transition: all 0.5s ease-in-out 0s;
  & input {
    font-family: inherit;
    transition: border linear 0.2s, box-shadow linear 0.2s;
    border-radius: 0;
    vertical-align: middle;
    width: 100%;
    color: #242424;
    padding: 9px 15px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.white};
    text-transform: inherit;
    border: 1px solid #f2f2f2;
    font-size: 15px;
    outline: none;
    line-height: inherit;
    letter-spacing: 1px;
    overflow: visible;
    text-align: left;
  }
  & textarea {
    font-family: inherit;
    transition: border linear 0.2s, box-shadow linear 0.2s;
    border-radius: 0;
    vertical-align: middle;
    width: 100%;
    color: #242424;
    padding: 9px 15px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.white};
    text-transform: inherit;
    border: 1px solid #f2f2f2;
    font-size: 15px;
    outline: none;
    line-height: inherit;
    letter-spacing: 1px;
    overflow: visible;
    text-align: left;
  }
`;
export const Tabs = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  & li {
    margin-top: 3px;
    margin-bottom: 2px;
    margin-left: 3px;
    margin-right: 2px;
    display: inline-block;
    text-align: -webkit-match-parent;
    & a {
      background-color: #f1f4f5;
      color: ${({ theme }) => theme.colors.darkgreen};

      font-size: 18px;
      font-weight: 500;
      text-transform: capitalize;
      padding: 12px 25px;
      border: 1px solid;

      letter-spacing: 0.5px;
      font-family: "Saira", Arial, Helvetica, sans-serif;
      display: block;
      cursor: pointer;
      margin-bottom: 5px;
      line-height: 22px;
      width: auto;
      position: relative;
      z-index: 3;
      border-radius: 0;
      transition: all 0.3s ease-in-out 0s;
      outline: medium none;
      text-decoration: none;
      border-color: #f1f4f5;
    }
  }
`;

export const SpecialLi = styled.li`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  & a {
    color: ${({ theme }) => theme.colors.darkgreen};
  }

  &:hover {
    > a {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  .activeli {
    background-color: ${({ theme }) => theme.colors.white};
    border-top-color: ${({ theme }) => theme.colors.green};
    border-top: 3px solid ${({ theme }) => theme.colors.green};
  }
`;
