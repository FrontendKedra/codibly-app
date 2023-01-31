import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Item {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}
interface InitialState {
  products: [];
  page: number;
  totalPages: number;
  status: string;
  modal: boolean;
  modalItems: Item[];
}

const initialState: InitialState = {
  products: [],
  page: 0,
  totalPages: 0,
  status: "initial",
  modal: false,
  modalItems: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, { payload }) => {
      state.status = "loading";
    },
    fetchProductsSuccess: (state, { payload: apiProducts }) => {
      state.status = "success";
      state.products = apiProducts.data;
      state.page = apiProducts.page;
      state.totalPages = apiProducts.total_pages;
    },
    fetchProductsError: (state) => {
      state.status = "error";
    },
    setNextPage: (state, { payload: currentPage }) => {
      state.page = currentPage + 1;
    },
    setPreviousPage: (state, { payload: currentPage }) => {
      state.page = currentPage - 1;
    },
    setModalItems: (state, { payload: mappedTableItems }) => {
      state.modalItems = [mappedTableItems];
    },
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsError,
  setNextPage,
  setPreviousPage,
  setModalItems,
  toggleModal,
} = productsSlice.actions;

export const selectProductsState = (state: RootState) => state.products;

export const selectProductsStatus = (state: RootState) =>
  selectProductsState(state).status;

export const selectProducts = (state: RootState) =>
  selectProductsState(state).products;

export const selectPage = (state: RootState) => selectProductsState(state).page;

export const selectTotalPages = (state: RootState) =>
  selectProductsState(state).totalPages;

export const selectFilteredProducts = (
  state: RootState,
  query: string | null
) => {
  const products = selectProducts(state);

  if (query === null) {
    return products;
  }

  return products.filter(({ id }) => query.includes(id));
};

export const selectModal = (state: RootState) =>
  selectProductsState(state).modal;

export const selectModalItems = (state: RootState) =>
  selectProductsState(state).modalItems;

export default productsSlice.reducer;
