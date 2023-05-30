import styled from "styled-components";

export const Section = styled.div`
  margin: 5rem auto;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Collg12 = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Collg9 = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: space-between;
`;

export const SectionTitle = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

export const TitleDesc = styled.p`
  margin-top: 6px;
  display: inline-block;
`;

export const TitleHeader = styled.div``;

export const TitleHTwo = styled.h2`
  color: ${(props) =>
    props.colorName
      ? props.theme.colors[props.colorName]
      : props.theme.colors.darkgreen};
  font-weight: 600;
  font-size: 35px;
  line-height: 42px;
  margin-bottom: 5px;
`;

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const WidgetNavMenue = styled.aside`
  position: relative;
  margin: 40px 0 40px;
  display: block;
`;

export const WidgetMenuBox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 0 15px 0 rgb(41 61 88 / 10%);
`;

export const ActiveLi = styled.li`
  border-top: none;
  padding: 0;
  position: relative;
  cursor: pointer;

  & a {
    color: ${({ theme }) => theme.colors.darkgreen};
    display: block;
    padding: 16px 30px 16px 15px;
    position: relative;
    font-weight: 600;
    font-size: 15px;
  }

  &:hover {
    > a {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.green};
  }
`;
