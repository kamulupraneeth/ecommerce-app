import {
  FETCH_CATEGORIES,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  SET_CATEGORY_FILTER,
} from "../actionTypes/actionTypes";

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });

export const fetchProduct = (id) => ({ type: FETCH_PRODUCT, payload: id });

export const fetchCategories = (category) => ({
  type: FETCH_CATEGORIES,
  payload: category,
});

// Action to set selected category filter
export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});
