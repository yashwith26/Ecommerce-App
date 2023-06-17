import { useContext } from "react"

import "./WishlistPage.css"
import { DataContext } from "../../contexts/DataProvider"
import { ProductCard } from "../ProductlistPage/productlistComponents/ProductCard";

export function WishlistPage() {

    const {dataState} = useContext(DataContext);

    if(dataState?.wishlist.length === 0) {
        return(
            <>
                <h1>Your wishlist is empty :(</h1>
            </>
        )
    }


    return(
        <>
            <h1>My Wishlist</h1>
            <div className="wishlist-container">
                {dataState?.wishlist.map((product) => <ProductCard product={product}/>)}
            </div>
        </>
    )
} 