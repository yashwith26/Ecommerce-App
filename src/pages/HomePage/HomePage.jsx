import { NavLink, useNavigate } from "react-router-dom"

import "./HomePage.css";
import { Footer } from "../../components/Footer/Footer"
import { categories } from "../../backend/db/categories";
import { useContext, useEffect } from "react";
import { FilterContext } from "../../contexts/FilterProvider";
import { ACTIONS } from "../../reducers/FilterReducer";

export function HomePage() {

    const navigate = useNavigate();

    const {dispatchFilter} = useContext(FilterContext);
    const {SET_CATEGORY_FILTER, CLEAR_ALL_FILTERS} = ACTIONS;

    useEffect(() =>{
        dispatchFilter({type: CLEAR_ALL_FILTERS, payload: {
            maxPriceRange: 4000, category: {
                MEN: false, WOMEN: false, KIDS: false
            }, selectedSizes: [], minRating: 0, sortBy: "", searchedTerm: ""
        }})
    },[])

    const categoryNavigationHandler = (categ) => dispatchFilter({type: SET_CATEGORY_FILTER, payload: categ})

    return (
        <>
            <div className="homepage-container">

                <div className="main-img-container">
                    <img className="main-img" src="https://assets.ajio.com/cms/AJIO/WEB/16062023-UHP-D-Main-P5-USPA-upto55.jpg" alt="" onClick={() => navigate("/productlist")} />
                </div>

                <div className="category-container">

                    <div className="container-heading">
                        <h2 className="heading">SHOP BY CATEGORY</h2>
                    </div>

                    <div className="categories-list">
                        {categories.map(({ _id, categoryName, description, image }) => (
                            <NavLink to="/productlist" onClick={() => categoryNavigationHandler(categoryName.toUpperCase())}>
                                <div key={_id} className="category-item">
                                    <div className="category-img-container">
                                        <img className="category-img" src={image} alt="" />
                                    </div>
                                    <div className="category-name">
                                        <h3 className>{categoryName}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}