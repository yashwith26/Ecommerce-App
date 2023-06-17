import { v4 as uuid } from "uuid";

export const ACTIONS = {
    SET_CATEGORIES: "set_categories",
    SET_PRODUCTLIST: "set_productlist",
    SET_WISHLIST_ITEMS: "set_wishlist_items",
    SET_CART_ITEMS: "set_cart_items",
    ADD_NEW_ADDRESS: "add_new_address", 
    DELETE_ADDRESS: "delete_address",
    UPDATE_ADDRESS: "update_address"
}

const {SET_CATEGORIES, SET_PRODUCTLIST, SET_WISHLIST_ITEMS, SET_CART_ITEMS, ADD_NEW_ADDRESS, DELETE_ADDRESS, UPDATE_ADDRESS} = ACTIONS;

export const DataReducer = (state, action) => {
    switch(action.type) {

        case SET_CATEGORIES: { 
            return {...state, categories: [...action.payload]} 
        }

        case SET_PRODUCTLIST: {
            return {...state, productlist: [...action.payload]}
        }

        case SET_WISHLIST_ITEMS: {
            return {...state, wishlist: [...action.payload]}
        }

        case SET_CART_ITEMS: {
            return {...state, cart: [...action.payload]}
        }

        case ADD_NEW_ADDRESS: {
            return {...state, address: [...state.address, {...action.payload, _id: uuid()}]}
        }
        
        case DELETE_ADDRESS: {
            return {...state, address: state.address.filter((obj) => obj._id !== action.payload)}
        }

        case UPDATE_ADDRESS: {
            return{...state, address: state.address.map((obj) => obj._id === action.payload.id ? {...action.payload.changedAddress} : obj )}
        }

       default: {
        return {...state}
       }
    }
}