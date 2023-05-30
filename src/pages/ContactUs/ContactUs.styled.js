import styled from "styled-components";

export const ColLg5 = styled.div`
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  position: relative;
  width: 100%;
`;

export const ColLg7 = styled.div`
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  position: relative;
  width: 100%;
`;

export const BgColor = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  padding-top: 40px;
  padding-right: 35px;
  padding-bottom: 40px;
  padding-left: 35px;
  z-index: 1;
  position: relative;
`;

export const LyerContent = styled.div`
  position: relative;
  z-index: 9;
  height: 100%;
  & h3 {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 15px;
    font-weight: 600;
  }
  & p {
    margin: 0 0 15px;
  }
`;

export const SepHolderBox = styled.div`
  margin-bottom: 35px !important;
  padding-top: 20px !important;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const SepHolder = styled.span`
  height: 1px;
  position: relative;
  flex: 1 1 auto;
  min-width: 10%;
  transition: all 0.5s ease-in-out 0s;
  color: ${({ theme }) => theme.colors.white};
`;

export const SepLine = styled.span`
  border-color: rgba(255, 255, 255, 0.09);
`;

export const FeaturedBoxIcon = styled.div`
  margin-bottom: 25px !important;
  transition: all 0.5s ease-in-out 0s;
  position: relative;
`;

export const FeaturedContainer = styled.div`
  transition: all 0.5s ease-in-out 0s;
`;

export const FeaturedIcon = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-right: 15px;
  transition: all 0.5s ease-in-out 0s;
`;

export const FeaturedTitle = styled.div`
  display: table-cell;
  vertical-align: middle;
  & h5 {
    margin-bottom: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
  }
  & h4 {
    font-size: 14px;
    line-height: 18px;
    font-family: "Ubuntu", Arial, Helvetica;
    font-weight: 400;
    margin-bottom: 0;
  }
`;

export const TtmIcon = styled.div`
  border: 1px solid;
  height: 54px;
  width: 54px;
  margin-bottom: -10px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  line-height: 45px;
  display: inline-block;
  text-align: center;
  box-sizing: content-box;
  position: relative;
  & svg {
    text-align: center;
    font-size: 25px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BgColorYes = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 40px;
  padding-right: 35px;
  padding-bottom: 40px;
  padding-left: 35px;
  z-index: 1;
  position: relative;
`;

export const SpecialForm = styled.form`
  display: block;
  margin-top: 0em;
  & label {
    width: 100%;
    margin: 0;
    display: inline-block;
    cursor: default;
    text-align: left;
  }
  & > input {
    margin: 78px 0 10px;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid;
    font-size: 13px;
    padding: 13px 30px 13px 30px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    line-height: 21px;
    font-weight: 600;
    transition: all 0.25s ease;
    outline: none !important;
    -webkit-font-smoothing: antialiased;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgreen};
    }
  }
`;

export const Input = styled.span`
  margin-bottom: 15px;
  display: block;
  padding-top: 5px;
  position: relative;
  transition: all 0.5s ease-in-out 0s;
  color: ${({ theme }) => theme.colors.green};
`;

export const InputReal = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #eaeaea;
  border-radius: 0;
  padding-left: 30px;
  padding-bottom: 9px;
  font-family: inherit;
  transition: border linear 0.2s, box-shadow linear 0.2s;
  vertical-align: middle;
  width: 100%;
  color: #242424;
  padding: 9px 15px;
  font-weight: 400;
  text-transform: inherit;
  font-size: 15px;
  outline: none;
  line-height: inherit;
  letter-spacing: 1px;
  overflow: visible;
`;
