import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthProvider"

import "../ProfilePage.css"

export function ProfileCard() {

    const {authState} = useContext(AuthContext);

    console.log(authState)
    return(
        <>
            <div className="profiledetails-container">
                <p>Name:<strong>{` ${authState.userData.firstName} ${authState.userData.lastName}`}</strong></p>
                <p>Email:<strong>{` ${authState.userData.email}`}</strong></p>
            </div>
        </>
    )
}