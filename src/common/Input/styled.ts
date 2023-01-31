import styled from "styled-components";

export const IdInput = styled.input`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 2px;

  ::placeholder {
    color: ${({ theme }) => theme.color.scorpion};
    font-size: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 15px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 14px;
      }
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-template-columns: 1fr;
`;

export const Header = styled.header`
  font-size: 26px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
  }
`;
