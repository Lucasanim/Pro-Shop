import { orderConstants } from "../constants/orderConstants";

export const orderCreateReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case orderConstants.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case orderConstants.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case orderConstants.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
