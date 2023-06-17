import { useContext } from "react"
import "./ProductlistPageAside.css"
import { FilterContext } from "../../../contexts/FilterProvider"
import { ACTIONS } from "../../../reducers/FilterReducer";

export function ProductlistPageAside() {

    const {SET_MAXPRICE_RANGE, SET_CATEGORY_FILTER, SET_SIZE_FILTER, SET_MIN_RATING, SORT_BY, CLEAR_ALL_FILTERS} = ACTIONS;

    const {dispatchFilter, filterState} = useContext(FilterContext);

    const categoryHandler = (categ) => dispatchFilter({type: SET_CATEGORY_FILTER, payload: categ})

    const sizeHandler = (siz) => dispatchFilter({type: SET_SIZE_FILTER, payload: siz})

    const ratingHandler = (rate) => dispatchFilter({type: SET_MIN_RATING, payload: rate})

    const sortHandler = (sorttype) => dispatchFilter({type: SORT_BY, payload: sorttype})

    const priceRangeHandler = (event) => dispatchFilter({type: SET_MAXPRICE_RANGE, payload: event.target.value})

    const clearAllFilters = () => dispatchFilter({type: CLEAR_ALL_FILTERS, payload: {
        maxPriceRange: 4000, category: {
            MEN: false, WOMEN: false, KIDS: false
        }, selectedSizes: [], minRating: 0, sortBy: "", searchedTerm: ""
    }})

    // const [price, setPrice] = useState(2500)

    return (
        <>
            <div className="filters-contaier">
                <div className="filters-heading">
                    <p>Filters</p>
                    <button className="clr-btn" onClick={clearAllFilters}>Clear</button>
                </div>
                <hr />
                <div className="sorts-filter-container">
                    <p className="sub-heading">Sort by</p>
                    <div><input type="radio" name="price-sorter" checked={filterState.sortBy === "LOWTOHIGH"} onChange={() => sortHandler("LOWTOHIGH")}/>Low to High</div>
                    <div><input type="radio" name="price-sorter" checked={filterState.sortBy === "HIGHTOLOW"}  onChange={() => sortHandler("HIGHTOLOW")}/>High to Low</div>
                </div>
                <hr />
                <div className="price-slider-container">
                    <p className="sub-heading">Price</p>
                    <div className="ranges">
                        <p>0</p>
                        <p>2000</p>
                        <p>4000</p>
                    </div>
                    <input className="price-slider" type="range" name="rangeInput" min="0" max="4000" value={filterState.maxPriceRange} onChange={(event) => priceRangeHandler(event)}/>
                </div>
                <hr />
                <div className="categories-filter-container">
                    <p className="sub-heading">Category</p>
                    <div><input type="checkbox" checked={filterState.category.MEN} onChange={() => categoryHandler("MEN")}/><label>Men</label></div>
                    <div> <input type="checkbox" checked={filterState.category.WOMEN} onChange={() => categoryHandler("WOMEN")}/><label>Women</label></div>
                    <div><input type="checkbox" checked={filterState.category.KIDS} onChange={() => categoryHandler("KIDS")}/><label>Kids</label></div>
                </div>
                <hr />
                <div className="sizes-filter-container">
                    <p className="sub-heading">Size</p>
                    <div><input type="checkbox" checked={filterState.selectedSizes.includes("S")} onChange={() => sizeHandler("S")}/><label>S</label></div>
                    <div><input type="checkbox" checked={filterState.selectedSizes.includes("M")} onChange={() => sizeHandler("M")}/><label>M</label></div>
                    <div><input type="checkbox" checked={filterState.selectedSizes.includes("L")} onChange={() => sizeHandler("L")}/><label>L</label></div>
                    <div><input type="checkbox" checked={filterState.selectedSizes.includes("XL")} onChange={() => sizeHandler("XL")}/><label>XL</label></div>
                    <div><input type="checkbox" checked={filterState.selectedSizes.includes("XXL")} onChange={() => sizeHandler("XXL")}/><label>XXL</label></div>
                </div>
                <hr />
                <div className="ratings-filter-container">
                    <p className="sub-heading">Rating</p>
                    <div><input type="radio" name="rating-sorter" id="" checked={filterState.minRating === 4} onChange={() => ratingHandler(4)}/>4 stars & above</div>
                    <div><input type="radio" name="rating-sorter" id="" checked={filterState.minRating === 3} onChange={() => ratingHandler(3)}/>3 stars & above</div>
                    <div><input type="radio" name="rating-sorter" id="" checked={filterState.minRating === 2} onChange={() => ratingHandler(2)}/>2 stars & above</div>
                    <div><input type="radio" name="rating-sorter" id="" checked={filterState.minRating === 1} onChange={() => ratingHandler(1)}/>1 stars & above</div>
                </div>
                <hr />
                
            </div>
        </>
    )
}