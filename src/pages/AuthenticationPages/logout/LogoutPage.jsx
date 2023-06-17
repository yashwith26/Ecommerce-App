import { NavLink } from "react-router-dom"
export function LogoutPage() {
    return(
        <>
        <h1>You are successfully logged out</h1>
        <NavLink to='/productlist'>Continue to Shop!</NavLink>
        </>
    )
}