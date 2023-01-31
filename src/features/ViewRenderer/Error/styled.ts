import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: 156px;
`;

export const Text = styled.p`
  font-size: 26px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 22px;
  }
`;
