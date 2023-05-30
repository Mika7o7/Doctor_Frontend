import styled from "styled-components";

export const Collg10 = styled.div`
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const ArrowButton = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.green};
    > svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
