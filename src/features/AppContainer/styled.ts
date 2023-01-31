import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto 1fr;
  justify-items: center;
  padding: 50px 0;
  grid-gap: 36px;
  height: 100vh;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 42px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 30px 0;
  }
`;
