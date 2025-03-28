import axios from "axios";
import {
  FETCH_CATEGORIES,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SINGLE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
} from "../actionTypes/actionTypes";
import { BASE_URL } from "../../utils/utils";
import { call, put, takeLatest } from "redux-saga/effects";

// Worker saga to fetch products
function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, `${BASE_URL}/products`);
    const filteredProducts = Object.groupBy(response.data, (product) => {
      return product.category;
    });
    const categories = Object.keys(filteredProducts);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    yield put({ type: FETCH_CATEGORIES, payload: categories });
  } catch (error) {
    console.error("Error in saga fetching products", error);
  }
}

// Worker saga to fetch products
function* fetchProductSaga(action) {
  const id = action.payload;
  try {
    const response = yield call(axios.get, `${BASE_URL}/products/${id}`);
    yield put({ type: FETCH_PRODUCT_SINGLE, payload: response.data });
  } catch (error) {
    console.error("Error in saga fetching products", error);
  }
}

// Watcher saga to listen for fetch products action
export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

// Watcher saga to listen for fetch products action
export function* watchFetchProduct() {
  yield takeLatest(FETCH_PRODUCT, fetchProductSaga);
}
