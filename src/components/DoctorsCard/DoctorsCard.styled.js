import styled from "styled-components";

export const NameSection = styled.div`
  font-size: 20px;
  line-height: 25px;
  font-family: "Saira", Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkgreen};
  transition: 0.5s;
`;

export const TtmTeamPosition = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  transition: all 0.5s ease-in-out 0s;
  transition: 0.5s;
`;

export const TtmBoxOwerflow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.5s;
  justify-content: center;
  align-items: center;
  z-index: 999;
  top: 0;
`;

export const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  background-color: transparent;
  transition: 1s;
`;

export const DoctorBox = styled.div`
  margin: 8px;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgb(41 61 88 / 10%);
  transition: 0.5s;
  position: relative;
  width: 260px;

  &:hover {
    box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    ${NameSection}, ${TtmTeamPosition} {
      color: ${({ theme }) => theme.colors.white};
    }
    ${TtmBoxOwerflow} {
      display: flex;
    }
    ${ImagePlaceholder} {
      background-color: #0008;
    }
  }
`;

export const FeaturedThumblain = styled.div`
  height: 300px;
  padding: 0.5rem;
  position: relative;
`;

export const FeaturedIconbox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  box-shadow: 0 0 15px 0 rgb(41 61 88 / 10%);
  > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FeaturedCntent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 11px 18px 2px;
  transition: all 0.5s ease-in-out 0s;
`;

export const FeaturedTitle = styled.div`
  text-align: center;
`;

export const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
