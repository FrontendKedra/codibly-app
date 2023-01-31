import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../common/Input";
import { Pagination } from "../../../common/Pagination";
import { RootState } from "../../../store";
import { useQueryParameter } from "../../../useQueryParameter";
import {
  selectFilteredProducts,
  setModalItems,
  toggleModal,
} from "../../Products/productsSlice";
import {
  Cell,
  RowTitle,
  TableContainer,
  TableHeader,
  TableRow,
  TableTitle,
} from "./styled";
import React from 'react';

export const Table: React.FC = () => {
  const dispatch = useDispatch();
  const id = useQueryParameter("id");
  const products = useSelector((state: RootState) =>
    selectFilteredProducts(state, id)
  );
  return (
    <>
      <Input />
      <TableContainer>
        <TableTitle>Products</TableTitle>
        <thead>
          <RowTitle>
            <TableHeader scope="col">Number</TableHeader>
            <TableHeader scope="col">Name</TableHeader>
            <TableHeader scope="col">Year</TableHeader>
          </RowTitle>
        </thead>
        <tbody>
          {products.map(({ id, name, year, color, pantone_value }) => (
            <TableRow
              key={id}
              color={color}
              onClick={() => {
                dispatch(toggleModal());
                dispatch(
                  setModalItems({
                    id,
                    name,
                    year,
                    color,
                    pantone_value,
                  })
                );
              }}
            >
              <Cell>{id}</Cell>
              <Cell>{name}</Cell>
              <Cell>{year}</Cell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      <Pagination />
    </>
  );
};
