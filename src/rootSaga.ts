import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./features/Products/productsSaga";

export function* rootSaga() {
    yield all([
        watchFetchProducts()
  ]);
}