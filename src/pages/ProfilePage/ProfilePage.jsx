import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import { ProfileCard } from "./profilepageComponents/ProfileCard";
import { AddressListComponents } from "../CheckoutPage/checkoutComponents/AddressListComponent"
import { DataContext } from "../../contexts/DataProvider";
import "./ProfilePage.css";

export function ProfilePage() {

    const { logoutAuthUser } = useContext(AuthContext);
    const { dataState, clearWishlistCart } = useContext(DataContext);

    const [showdetailsof, setShowdetailsof] = useState({ profile: true, addresses: false })

    const logoutHandler = () => {
        logoutAuthUser();
        clearWishlistCart();
    }

    return (
        <>
            <div className="profilepage-container">
                <div className="heading-n-logoutbtn">
                    <h1>My Profile</h1>
                    <button onClick={() => logoutHandler()} className="logout-btn">Log out</button>
                </div>
                <hr />
                <div className="nav-btns">
                    <button className="profile-btn" onClick={() => setShowdetailsof({ profile: true, addresses: false })} style={showdetailsof.profile ? {color: "#fff", backgroundColor: "#0052cc"} : {} } >
                        PROFILE
                    </button>
                    <button className="addresses-btn" onClick={() => setShowdetailsof({ profile: false, addresses: true })} style={showdetailsof.addresses ? {color: "#fff", backgroundColor: "#0052cc"} : {} }>
                        ADDRESSES
                    </button>
                </div>

                <div className="profile-page-content">
                    {showdetailsof.profile && <ProfileCard />}
                    {showdetailsof.addresses && <AddressListComponents address={dataState.address} />}
                </div>
            </div>



        </>
    )
}