import styled from "styled-components";
import { ReactComponent as PreviousArrow } from "./images/previousArrow.svg";
import { ReactComponent as NextArrow } from "./images/nextArrow.svg";

export const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 6px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.pattensBlue};
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.color.moonRaker};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    cursor: not-allowed;

      &:hover {
        background-color: ${({ theme }) => theme.color.gray};
      }
  }
`;

export const ArrowPrevious = styled(PreviousArrow)`
  height: 10px;
`;

export const ArrowNext = styled(NextArrow)`
  height: 10px;
`;
