import styled from "styled-components";

export const ContainerNavIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.darkgreen};
  height: 50px;
  display: flex;
  align-items: center;
`;

export const MainNavIcon = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const NavIconLoc = styled.span`
  font-size: 14px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const NavIconTime = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const NavInetIcons = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
export const NavAppIcon = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  padding: 18.7px 17px 18px 17px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  transition: 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const NavTwiIcon = styled.span`
  padding: 0 10px;
`;
export const NavInIcon = styled.span`
  padding-left: 10px;
  padding-right: 20px;
`;
