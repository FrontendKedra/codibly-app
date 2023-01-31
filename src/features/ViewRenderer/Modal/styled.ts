import styled from "styled-components";

export const ModalContainer = styled.div`
  display: grid;
  padding: 26px;
  border: 1px solid ${({ theme }) => theme.color.black};
  gap: 26px;
  background-color: ${({ color }) => color};
`;

export const Item = styled.p`
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 6px;
  background-color: ${({ theme }) => theme.color.white};
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: max-content;
  justify-self: end;
  padding: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.gray};
  border: 2px solid ${({ theme }) => theme.color.jumbo};
  cursor: pointer;
  transition: 0.3s;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.mischka};
  }
`;
