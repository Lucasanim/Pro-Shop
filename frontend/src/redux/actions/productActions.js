import axios from "axios";
import { productContants } from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productContants.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({ type: productContants.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productContants.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: productContants.PRODUCT_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: productContants.PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: productContants.PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
