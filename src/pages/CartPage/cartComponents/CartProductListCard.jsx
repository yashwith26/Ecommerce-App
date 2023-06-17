import { CartProductCard } from "./CartProductCard";


export function CartProductsListCard({cartList}) {
    return(
        <>
            <div className="product-list-container">
                 {cartList.map((product) => <CartProductCard product={product}/>)}
            </div>
        </>
    )

}