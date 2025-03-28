import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

// Action to add item to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
