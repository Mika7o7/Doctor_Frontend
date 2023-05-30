import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Saira",Arial,Helvetica,sans-serif;
  }
  html,body{
    overflow-x: none;
  }
  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: "Ubuntu",Tahoma,Geneva,sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #9dabaf;
    letter-spacing: 0px;
    overflow-x: hidden;
 
  }
  button {
    border: none;
    outline: none;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 13px;
    font-weight: 400;
    line-height: 23px;
    margin: 0;
}
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    
  }
  input {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    margin: 0;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #D0D0D2;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.violet};
    border-radius: 40px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5C5A62;
  }
  @media ${device.tablet}{
    ::-webkit-scrollbar {
    width: 3px;
  }
  }
`;
