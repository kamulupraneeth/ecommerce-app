import {
  FETCH_CATEGORIES,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SINGLE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  SET_CATEGORY_FILTER,
} from "../actionTypes/actionTypes";

const initialState = {
  items: [],
  selectedProduct: null,
  selectedCategory: "",
  categories: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload };
    case FETCH_PRODUCT_SINGLE:
      return { ...state, selectedProduct: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, categories: [...state.categories, ...action.payload] };
    case SET_CATEGORY_FILTER:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export default productReducer;
