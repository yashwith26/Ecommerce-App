import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css"
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterProvider";
import { ACTIONS } from "../../reducers/FilterReducer";
import { AuthContext } from "../../contexts/AuthProvider";
import { DataContext } from "../../contexts/DataProvider";
// import Topshop_Logo from "assets/images";

export function Navbar() {

    const {dataState} = useContext(DataContext);

    const navigate = useNavigate()

    const {SET_SEARCHED_TERM} = ACTIONS;

    const {dispatchFilter} = useContext(FilterContext)

    const {authState} = useContext(AuthContext);

    const searchTermSetter = (event) => {
        dispatchFilter({type: SET_SEARCHED_TERM, payload: event.target.value});
        navigate("/productlist");
    }

    const wishlistCount = dataState.wishlist.reduce((acc, prod) => acc + 1 , 0);
    const cartCount = dataState.cart.reduce((acc, prod) => acc + 1 , 0);

    return (
        <>
            <div className="nav-container">
                <div >
                    <NavLink to="/" className="app-name">
                        TopShop
                    </NavLink>
                </div>
                {/* <div className="app-logo">
                    <img src="" alt="" />
                </div> */}
                <div>
                    <input type="text" placeholder="Search" className="search-bar" onChange={(event) => searchTermSetter(event)}/>
                </div>
                <div className="navigations">
                    <NavLink to="/productlist" className="right-nav shopnow-btn">Shop Now!</NavLink>
                    <NavLink to="/wishlist" className="right-nav icon">
                        <FontAwesomeIcon icon={faHeart} />{wishlistCount > 0 && <span className="wish-cart-count">({wishlistCount})</span>}
                    </NavLink>
                    <NavLink to="/cart" className="right-nav icon">
                        <FontAwesomeIcon icon={faCartShopping} />{cartCount > 0 && <span className="wish-cart-count">({cartCount})</span> }
                    </NavLink>
                    <NavLink to="/profile" className="right-nav icon">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    {!authState.isLoggedin && <NavLink to="/login" className="right-nav login-btn">Login</NavLink>}
                </div>
            </div>
            <div>
            {!authState.isLoggedin && <NavLink to="/login" className="right-nav login-btn-mobile">Login</NavLink>}
            </div>
            <div>
                <input type="text" placeholder="Search" className="mobile-search-bar" onChange={(event) => searchTermSetter(event)}/>
            </div>
        </>
    )
}