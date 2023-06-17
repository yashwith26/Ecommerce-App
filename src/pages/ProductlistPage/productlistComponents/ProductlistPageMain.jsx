import { useContext } from "react";

import { DataContext } from "../../../contexts/DataProvider";
import { ProductCard } from "./ProductCard";
import "./ProductlistPageMain.css";
import { FilterContext } from "../../../contexts/FilterProvider";
import { Spinner } from "../../../components/Spinner/Spinner";

export function ProductlistPageMain() {
    
    const { dataState } = useContext(DataContext);

    const { filterState } = useContext(FilterContext);
    const { maxPriceRange, category, selectedSizes, minRating, sortBy, searchedTerm} = filterState;

    const { productlist } = dataState;

    let filteredProductlist = [...productlist]
    // console.log(productlist);

    // Category filter
    if (category.MEN && category.WOMEN && category.KIDS) {
        filteredProductlist = [...filteredProductlist]
    } else if (category.MEN && category.WOMEN) {
        filteredProductlist = [...filteredProductlist].filter(({category}) => category.toUpperCase() === "MEN" ||  category.toUpperCase() === "WOMEN")
    } else if (category.MEN && category.KIDS) {
        filteredProductlist = [...filteredProductlist].filter(({category}) => category.toUpperCase() === "MEN" ||  category.toUpperCase() === "KIDS")
    } else if (category.WOMEN && category.KIDS) {
        filteredProductlist = [...filteredProductlist].filter(({category}) => category.toUpperCase() === "WOMEN" ||  category.toUpperCase() === "KIDS")
    } else if (category.MEN) {
        filteredProductlist = [...filteredProductlist].filter(({category}) => category.toUpperCase() === "MEN")
    } else if (category.WOMEN) {
        filteredProductlist = [...filteredProductlist].filter(({category}) => category.toUpperCase() === "WOMEN")
    } else if (category.KIDS) {
        filteredProductlist = [...filteredProductlist].filter(({category}) => category.toUpperCase() === "KIDS")
    }

    //Size filter
    if(selectedSizes.length !== 0) {
        filteredProductlist = [...filteredProductlist].filter(({size}) => selectedSizes.includes(size) )
    }

    //Rating filter
    filteredProductlist = [...filteredProductlist].filter(({rating}) =>  Number(rating) > minRating)

    //Sort by 
    if(sortBy === "LOWTOHIGH") {
        filteredProductlist = [...filteredProductlist].sort((a, b) => Number(a.price) - Number(b.price))
    } else if (sortBy === "HIGHTOLOW") {
        filteredProductlist = [...filteredProductlist].sort((a, b) => Number(b.price) - Number(a.price))
    }

    //Price range filter
    filteredProductlist = [...filteredProductlist].filter(({price}) => Number(price) <= maxPriceRange)

    //Search result
    filteredProductlist = [...filteredProductlist].filter(({title}) => title.toLowerCase().includes(searchedTerm.toLowerCase()))

    return (
        <>
            {productlist.length === 0 && <Spinner/>}
            <div className="productlist-container">
                {filteredProductlist.map((product) => <ProductCard product={product}/>)}
            </div>
        </>
    )
}