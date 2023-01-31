import { useDispatch, useSelector } from "react-redux";
import { useQueryParameter } from "../../useQueryParameter";
import { Error } from "./Error";
import { Modal } from "./Modal";
import {
  fetchProducts,
  selectFilteredProducts,
  selectModal,
  selectProductsStatus,
} from "../Products/productsSlice";
import { NoResult } from "./NoResult";
import { useEffect } from "react";
import { Table } from "./Table";
import { RootState } from "../../store";
import React from "react";

export const ViewRenderer: React.FC = () => {
  const dispatch = useDispatch();
  const page = useQueryParameter("page");
  const id = useQueryParameter("id");
  const status = useSelector(selectProductsStatus);
  const modal = useSelector(selectModal);
  const products = useSelector((state: RootState) =>
    selectFilteredProducts(state, id)
  );

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  switch (status) {
    case "loading":
      return null;
    case "success":
      return (
        <>
          {products.length !== 0 ? (
            !!modal ? (
              <Modal />
            ) : (
              <Table />
            )
          ) : (
            <NoResult />
          )}
        </>
      );
    case "error":
      return <Error />;
    default:
      return null;
  }
};
