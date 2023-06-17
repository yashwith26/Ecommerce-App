import axios from "axios";

import { ACTIONS } from "../reducers/DataReducer";

const { SET_CART_ITEMS } = ACTIONS;

export const getCartItems = async (authToken) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error.response.data);
  }
};

export const addToCart = async (authToken, product, dispatchData) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: authToken } }
    );
    if (response.status === 201) {
      dispatchData({ type: SET_CART_ITEMS, payload: response.data.cart });
    }
  } catch (error) {
    console.error(error.response.message);
  }
};

export const removeFromCart = async (authToken, id, dispatchData) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      dispatchData({ type: SET_CART_ITEMS, payload: response.data.cart });
    }
  } catch (error) {
    console.error(error.response.message);
  }
};

export const updateItemQuantityInCart = async (
  authToken,
  id,
  type,
  dispatchData
) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type } },
      { headers: { authorization: authToken } }
    );
    if (response.status === 200) {
      dispatchData({ type: SET_CART_ITEMS, payload: response.data.cart });
    }
  } catch (error) {
    console.error(error);
  }
};

export const isPresentedInCart = (dataState, id) => {
  return dataState.cart.find(({ _id }) => id === _id) ? true : false;
};