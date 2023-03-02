import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectTotalPages,
  setNextPage,
  setPreviousPage,
} from "../../features/apiProducts/productsSlice";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { ArrowNext, ArrowPrevious, Button, Container } from "./styled";
import React from "react";

export const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onNextClick = () => {
    dispatch(setNextPage(page));
    replaceQueryParameter({ key: "page", value: page + 1 });
  };

  const onPreviousClick = () => {
    dispatch(setPreviousPage(page));
    replaceQueryParameter({ key: "page", value: page - 1 });
  };

  return (
    <Container>
      <Button disabled={page === 1} onClick={onPreviousClick}>
        <ArrowPrevious /> Previous
      </Button>
      <span>Page {page} of </span>
      <span>{totalPages}</span>
      <Button disabled={page === totalPages} onClick={onNextClick}>
        Next <ArrowNext />
      </Button>
    </Container>
  );
};
