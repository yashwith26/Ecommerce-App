import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS, DataReducer } from "../reducers/DataReducer";
import { exampleAdress } from "../utils/exampleAdress";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const authToken = localStorage.getItem("userToken");

    const { authState } = useContext(AuthContext);

    const { SET_CATEGORIES, SET_PRODUCTLIST, SET_WISHLIST_ITEMS, SET_CART_ITEMS } = ACTIONS;

    const [dataState, dispatchData] = useReducer(DataReducer, {
        categories: [],
        productlist: [],
        wishlist: [],
        cart: [],
        address: [{ ...exampleAdress }],
        orderHistory: []
    })

    const getCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            if (response.status === 200) dispatchData({ type: SET_CATEGORIES, payload: response.data.categories })
        }
        catch (error) { console.error(error); }
    }

    const getProductlist = async () => {
        try {
            const response = await axios.get("/api/products");
            if (response.status === 200) dispatchData({ type: SET_PRODUCTLIST, payload: response.data.products })
        }
        catch (error) { console.error(error); }
    }

    //if loggen in then get wishlist and cart datasets

    const getWishlist = async () => {
        try {
            const response = await axios.get("/api/user/wishlist", { headers: { authorization: authToken } })
            if(response.status === 200) {
                dispatchData({type: SET_WISHLIST_ITEMS, payload: response.data.wishlist})
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const getCart = async () => {
        try {
            const response = await axios.get("/api/user/cart", { headers: { authorization: authToken } })
            if(response.status === 200) {
                dispatchData({type: SET_CART_ITEMS, payload: response.data.cart})
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const clearWishlistCart = () => {
        dispatchData({type: SET_WISHLIST_ITEMS, payload: []})
        dispatchData({type: SET_CART_ITEMS, payload: []})
    }

    useEffect(() => {
        getCategories();
        getProductlist();
        if(authState.isLoggedin) {
            getWishlist();
            getCart();
        }
    }, [authState.isLoggedin])

    console.log("datastate", dataState);

    return (
        <>
            <DataContext.Provider value={{ dataState, dispatchData, clearWishlistCart }}>{children}</DataContext.Provider>
        </>
    )
}