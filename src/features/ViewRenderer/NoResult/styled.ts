import styled from "styled-components";

export const NoItemsText = styled.p`
  text-align: center;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 19px;
    padding: 0 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;
