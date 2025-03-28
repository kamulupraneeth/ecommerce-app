import { watchFetchProduct, watchFetchProducts } from "./productSagas";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([watchFetchProducts(), watchFetchProduct()]);
}
