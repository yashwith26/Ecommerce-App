
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import "./SingleproductPage.css"

import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";
import { addToCart, isPresentedInCart, removeFromCart } from "../../utils/cartService";
import { DataContext } from "../../contexts/DataProvider";
import { addToWishlist, isWishlisted, removeFromWishlist } from "../../utils/wishlistService";
import { Spinner } from "../../components/Spinner/Spinner";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successToastmessage } from "../../components/Toastmessage/successToastmessage";

export function SingleproductPage() {

    const navigate = useNavigate();

    const authToken = localStorage.getItem("userToken");

    const {authState} = useContext(AuthContext);
    const {dataState, dispatchData} = useContext(DataContext);


    const [selectedProduct, setSelectedProduct] = useState({});
    const { productId } = useParams();

    const getProduct = async() => {
        try{
            const response = await axios.get(`/api/products/${productId}`);
            if(response.status === 200){ console.log(response)
                setSelectedProduct(response.data.product);
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
         getProduct();
    }, [productId])

    const discountPercentage = (price, original_price) => Math.round((price / original_price) * 100);

    const addToWishlistHandler = (e, authToken, product) => {
        e.preventDefault();
        if(!authState.isLoggedin) {
            navigate("/login");
        }
        else if(isWishlisted(dataState, product._id)) {
            removeFromWishlist(authToken, product._id, dispatchData);
            successToastmessage("Product removed from wishlist");
        } 
        else {
            addToWishlist(authToken, product, dispatchData);
            successToastmessage("Product added to wishlist");
        }
    }

    const addToCartHandler = (e, authToken, product) => {
        e.preventDefault();
        if(!authState.isLoggedin) {
            navigate("/login");
        }
        else if(isPresentedInCart(dataState, product._id)) {
            removeFromCart(authToken, product._id, dispatchData);
            successToastmessage("Product removed from cart");
        }
        else {
            addToCart(authToken, product, dispatchData);
            successToastmessage("Product added to cart");
        }
    }
 
    const goToCartHandler = (event) => {
        event.preventDefault();
        navigate("/cart");
    }

    return (
        <>
            {Object.keys(selectedProduct).length === 0 && <Spinner/>}
            <div className="selectedproduct-detail-container">

                <div className="selectedproduct-img-container">
                    <img className="selectedproduct-img" src={selectedProduct?.image} alt="" />
                </div>

                <div className="selectedproduct-allinfo">
                    <div className="selectedproduct-title-container">
                        <h1>{selectedProduct?.title}</h1>
                    </div>
                    <div className="selectedproduct-rating-n-review">
                        <span>{selectedProduct?.rating}<span><i className="star-icon fa-solid fa-star"></i></span> | {`${selectedProduct?.reviews} Reviews`}</span>
                    </div>
                    <hr />
                    <div className="selectedproduct-price-n-btns">
                        <div className="selectedproduct-pricedetails">
                            <div className="selectedproduct-price-details-ele selectedproduct-actual-price">
                                {`₹${selectedProduct?.price}`}
                            </div>
                            <div className="selectedproduct-price-details-ele selectedproduct-original-price">
                                {`₹${selectedProduct?.original_price}`}
                            </div>
                            <div className="selectedproduct-price-details-ele selectedproduct-discount">
                                {`${100 - discountPercentage(selectedProduct?.price, selectedProduct?.original_price)}% OFF`}
                            </div>
                        </div>
                        <small className="taxes-text">inclusive of all taxes</small>
                        <div className="selectedproduct-btns">
                            <div className="selectedproduct-addtocart-btn">
                            {isPresentedInCart(dataState, selectedProduct?._id) ?<button  onClick={(e) => goToCartHandler(e)}>Go to Cart</button> :
                            <button onClick={(e) => addToCartHandler(e, authToken, selectedProduct)}>Add to Cart</button>}
                                
                            </div>
                            <div className="selectedproduct-wishlist-btn">
                                {isWishlisted(dataState, selectedProduct?._id) ? <button onClick={(e) => addToWishlistHandler(e, authToken, selectedProduct)}>Remove from wishlist</button> :
                                <button onClick={(e) => addToWishlistHandler(e, authToken, selectedProduct)}>Wishlist</button>}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="selectedproduct-otherdetails">
                        <div className="bestoffers">
                            <i class="fa-solid fa-tag"></i>{` Best Offers`}
                        </div>
                        <div className="selectedproduct-availabality">
                            <strong>Availabilty:</strong>{` ${selectedProduct?.in_stock ? "In Stock" : "Out of Stock"}`}
                        </div>
                        <div className="selectedproduct-description">
                            <strong>Description:</strong>{` ${selectedProduct?.description}`}
                        </div>
                        <div className="selectedproduct-size">
                            <strong>Size:</strong>{` ${selectedProduct?.size}`}
                        </div>
                        <div className="selectedproduct-deliverytime">
                            <strong>Delivery:</strong>{` Get it in ${selectedProduct?.delivery_time} days`}
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer/>
        </>
    )
}