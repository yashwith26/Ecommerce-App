import { useLocation, useNavigate } from "react-router-dom";

import "./CartSummaryCard.css"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successToastmessage } from "../../../components/Toastmessage/successToastmessage";
import { warningToastmessage } from "../../../components/Toastmessage/warningToastmessage";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataProvider";
import { ACTIONS } from "../../../reducers/DataReducer";

export function CartSummaryCard({cartList, selectedAddress}) {

    const {dispatchData} = useContext(DataContext)

    const {SET_CART_ITEMS} = ACTIONS;

    const location = useLocation();

    const navigate = useNavigate();

    const totalPrice = (cartList) => cartList.reduce((acc, {qty, price}) => acc + (qty * price) , 0);

    const placeorderHandler = () => {

        if(selectedAddress === null) {
            warningToastmessage("Please select adress!");
            return;
        }
        successToastmessage("Order has been placed successfully!!");
            navigate("/orderplaced")
            dispatchData({type: SET_CART_ITEMS, payload: []});
            }

    //     var option={
    //         key:"rzp_test_nihSKlevk7rG9M",
    //         amount:Number(totalPrice(cartList)) * 100,
    //         currency:'INR',
    //         name:"TOPSHOP",
    //         description:"",
    //         handler:function(response){
    //         successToastmessage("Order has been placed successfully!!");
    //         navigate("/orderplaced")
    //         dispatchData({type: SET_CART_ITEMS, payload: []});
    //         },
    //         theme:{
    //           color: "#0052cc",
    //         },
    //     };
    //     var pay=new window.Razorpay(option);
    //     pay.open();
    // }

    return (
        <>
            <div className="cartsummary-card-container">
                <div className="cart-summary-heading">
                {location?.pathname === "/cart" && "Cart Price Details"}
                {location?.pathname === "/checkout" && "Order Summary"}
                </div>
                <hr />
                <div className="product-checkoutlist-container">
                {cartList.map(({title, qty, price}) => (
                    <div className="product-summary">
                        <p>{title} ({qty})</p>
                        <p>{qty * price}</p>
                    </div>
                ) )}
                </div>
                <hr />
                <div className="total-price">
                    <p>Total Price</p>
                    <p>{totalPrice(cartList)}</p>
                </div>
                {location?.pathname === "/cart" && <button className="checkout" onClick={() => navigate("/checkout")}>
                    Checkout
                </button>}
                {location?.pathname === "/checkout" && <button className="checkout" onClick={() => placeorderHandler()}>
                    Place Order
                </button>}
            </div>
            <ToastContainer/>
        </>
    )
}