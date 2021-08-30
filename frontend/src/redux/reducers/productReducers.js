import { productContants } from "../constants/productConstants";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productContants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case productContants.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case productContants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case productContants.PRODUCT_DETAIL_REQUEST:
      return { loading: true, ...state };
    case productContants.PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case productContants.PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
