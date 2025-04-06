import {
  ADD_TO_CART,
  INCREMENT_PRODUCT_COUNT,
  REMOVE_FROM_CART,
  DECREMENT_PRODUCT_COUNT,
  LOGOUT,
} from "../actionTypes/actionTypes";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, count: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case INCREMENT_PRODUCT_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };
    case DECREMENT_PRODUCT_COUNT:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        ),
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
