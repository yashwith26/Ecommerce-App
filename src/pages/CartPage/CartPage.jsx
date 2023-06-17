import { useContext, useEffect } from "react"

import "./CartPage.css"
import { CartProductsListCard } from "./cartComponents/CartProductListCard";
import { DataContext } from "../../contexts/DataProvider";
import { CartSummaryCard } from "./cartComponents/CartSummaryCard";

export function CartPage() {

    const {dataState} = useContext(DataContext);

    if(dataState.cart.length === 0) {
        return (
            <>
            <h1>Your Cart is empty :</h1>
        </>
        )
    }

    return(
        <>
            <h1>My Cart</h1>
            <div className="cart-page-container">
               <CartProductsListCard cartList={dataState.cart}/>
               <CartSummaryCard cartList={dataState.cart}/>
            </div>
        </>
    )
}