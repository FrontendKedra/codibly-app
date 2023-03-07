import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse } from "../../common/interfaces/interface";
import { apiEndPoint, perPage } from "./apiValue";
import { getProductsFromApi } from "./getProductsFromApi";
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
    const products: ApiResponse = yield call(getProductsFromApi, path);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError());
  }
}

export function* watchFetchProducts() {
  yield takeLatest(fetchProducts, fetchProductsHandler);
}
