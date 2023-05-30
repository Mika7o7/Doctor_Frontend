import styled from "styled-components";

export const NavItems = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  height: 100px;
`;

export const NavUl = styled.ul`
  display: flex;
  width: 70%;
  column-gap: 2rem;
`;

export const NavLi = styled.li`
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
  .active {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const NavLogoImg = styled.img`
  width: 150px;
`;
