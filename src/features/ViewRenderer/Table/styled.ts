import styled from "styled-components";

export const TableRow = styled.tr`
  background-color: ${({ color }) => color};

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.black};
  }
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
`;

export const Cell = styled.td`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.black};
  font-size: 18px;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const TableTitle = styled.caption`
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 24px;
  }
`;

export const RowTitle = styled.tr`
  background-color: ${({ theme }) => theme.color.wildSand};
`;

export const TableHeader = styled.th`
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 6px;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;
