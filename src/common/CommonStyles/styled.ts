import styled from "styled-components";

export const MainPageLink = styled.a`
  text-decoration: none;
  border: 1px solid blue;
  width: max-content;
  font-size: 16px;
  border-radius: 15px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  align-self: start;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hoverShadow};
  }
`;
