import "./CheckoutPage.css";
import {CartSummaryCard} from "../CartPage/cartComponents/CartSummaryCard";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataProvider";
import { AddressListComponents } from "./checkoutComponents/AddressListComponent";

export function CheckoutPage() {

    const {dataState} = useContext(DataContext);

    const [selectedAddress, setSelectedAddress] = useState(null);

    return(
        <>
            <div className="checkoutpage-container">
                <AddressListComponents address={dataState.address} setSelectedAddress={setSelectedAddress}/>
                <CartSummaryCard cartList={dataState.cart} selectedAddress={selectedAddress}/>
            </div>
        </>
    )
}