import { NavLink } from "react-router-dom";

import "./SignupPage.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

export function SignupPage() {

    const {signupAuthUser} = useContext(AuthContext);

    const [showpassword, setShowpassword] = useState({type: "password", hidden: true});

    const [userSignupData, setUserSignupData] = useState({ name: "", email: "", password: "", confirmPassword: ""})
    const [formError, setFormError] = useState(false)

    const inputChangeHandler = (event) => {
        setUserSignupData((userSignupData) => ({...userSignupData, [event.target.name]: event.target.value}))
    }
    
    // console.log(userSignupData)

    const signupSubmit = (event) => {
        event.preventDefault();
        if(userSignupData.password === userSignupData.confirmPassword) {
            setFormError(false);
            signupAuthUser(userSignupData);
        }
        else {
            setFormError(true);
        }
    }

    const hideHandler = () => {
        if(showpassword.hidden) {
            setShowpassword((showpassword) =>( {type: "text", hidden: false}));
        } 
        else {
            setShowpassword((showpassword) =>( {type: "password", hidden: true}));
        }
    }

    return (
        <>
            {/* <div className="signup-page"> */}
            <div className="signup-container">
                <h1 className="signup-heading">
                    Sign Up
                </h1>
                {formError && <p className="formError-warning">All fields are mandatory, and the password and confirm password should match.</p>}
                <div className="name-container">
                    <p>Name</p>
                    <input type="text" name="name" required className="name-input" placeholder="Enter Name" onChange={inputChangeHandler}/>
                </div>
                <div className="email-container">
                    <p>Email</p>
                    <input type="text" name="email" required className="email-input" placeholder="Enter Email" onChange={inputChangeHandler}/>
                </div>
                <div className="password-container">
                    <p>Password</p>
                    <input type={showpassword.type} name="password" required className="password-input" placeholder="Enter Password" onChange={inputChangeHandler}/>
                    <span className="show-hide-signup" onClick={hideHandler}>{showpassword.hidden ? "Show" : "Hide"}</span>
                </div>
                <div className="confirm-password-container">
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" required className="confirm-password-input" placeholder="Enter Password" onChange={inputChangeHandler}/>
                </div>
                <div className="signup-btn-container">
                    <button className="signup-submit-btn" onClick={signupSubmit}>Sign Up</button>
                    <p className="login-text">Already have an account? <NavLink to="/login" className="login-link">Login</NavLink> </p>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}