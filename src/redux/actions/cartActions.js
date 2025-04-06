import {
  ADD_TO_CART,
  INCREMENT_PRODUCT_COUNT,
  REMOVE_FROM_CART,
  DECREMENT_PRODUCT_COUNT,
  LOGOUT,
} from "../actionTypes/actionTypes";

// Action to add item to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementProductCount = (id) => ({
  type: INCREMENT_PRODUCT_COUNT,
  payload: id,
});

export const decrementProductCount = (id) => ({
  type: DECREMENT_PRODUCT_COUNT,
  payload: id,
});

// clear all items
export const logout = () => ({
  type: LOGOUT,
});
