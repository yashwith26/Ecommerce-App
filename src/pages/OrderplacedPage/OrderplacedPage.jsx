import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBadgeCheck } from "@fortawesome/free-solid-svg-icons";

import "./OrderplacedPage.css"

export function OrderplacedPage() {

    const navigate = useNavigate();

    return(
        <>
            {/* <div className="orderplaced-full-page"> */}
            <div className="orderplaced-page-container">
            <h1>
                Your Order has been Placed Successfully ☑ <i class="fa-sharp fa-solid fa-badge-check"/>
            </h1>
            <h2>
                Thank you for shopping with us
            </h2>
            <h2 onClick={() => navigate("/productlist")} className="deal-nav">
                Checkout more deals!
            </h2>
            </div>
            {/* </div> */}
        </>
    )
}