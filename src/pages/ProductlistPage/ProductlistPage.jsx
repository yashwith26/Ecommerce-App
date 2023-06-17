
import "./ProductlistPage.css"
import {ProductlistPageAside} from "./productlistComponents/ProductlistPageAside"
import { ProductlistPageMain } from "./productlistComponents/ProductlistPageMain"

export function ProductlistPage() {
    return(
        <>
            <div className="productlist-page-container">
                <ProductlistPageAside />
                <ProductlistPageMain/>
            </div>
        </>
    )
}