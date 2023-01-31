import { call, put, takeLatest } from "redux-saga/effects";
import { getProductsFromApi, Product } from "./getProductsFromApi";
import { apiEndPoint, perPage } from "../../apiValue";
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from "./productsSlice";

interface Payload {
  payload: number | null;
}

function* fetchProductsHandler({ payload: page }: Payload) {
  const path =
    page === null
      ? `${apiEndPoint}${perPage}`
      : `${apiEndPoint}${perPage}&page=${page}`;

  try {
    const products: Product = yield call(getProductsFromApi, path);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError());
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProducts, fetchProductsHandler);
}
