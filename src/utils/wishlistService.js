import axios from "axios";
import { ACTIONS } from "../reducers/DataReducer";

const { SET_WISHLIST_ITEMS } = ACTIONS;

export const getWishlistedProducts = async (authToken) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response;
    }else {
        throw new Error();
      }
  } catch (error) {
    console.error(error);
  }
};
 
export const addToWishlist = async (authToken, product, dispatchData) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: authToken } }
    );
    if (response.status === 201) {
      dispatchData({ type: SET_WISHLIST_ITEMS, payload: response.data.wishlist });
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeFromWishlist = async (authToken, id, dispatchData) => {
    try{
        const response = await axios.delete(`/api/user/wishlist/${id}`, {
            headers: {authorization: authToken}
        });
        if(response.status === 200) {
            dispatchData({ type: SET_WISHLIST_ITEMS, payload: response.data.wishlist });
        }
    }
    catch (error) {
        console.error(error)
    }
};

export const isWishlisted = (dataState, id) => {
  return dataState.wishlist.find(({ _id }) => id === _id) ? true : false;
};