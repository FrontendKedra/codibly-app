import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./features/apiProducts/productsSaga";

export function* rootSaga() {
    yield all([
        watchFetchProducts()
  ]);
}