import { NavLink } from "react-router-dom";
 
import "./LoginPage.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

export function LoginPage() {

    const [showpassword, setShowpassword] = useState({type: "password", hidden: true});

    const {loginAuthUser} = useContext(AuthContext);

    const [userLoginData, setUserLoginData] = useState({email: "", password: ""});
    const [formError, setFormError] = useState(false)

    const inputChangeHandler = (event) => {
        setUserLoginData((userLoginData) => ({...userLoginData, [event.target.name]: event.target.value}))
    }

    const loginSubmit = (event) => {
        event.preventDefault();
        if(userLoginData.email.length > 0 && userLoginData.password.length > 0) {
            setFormError(false)
            loginAuthUser(userLoginData);
        }
        else {
            setFormError(true);
        }
    }

    const loginAsGuestSubmit = (event) => {
        event.preventDefault();
        loginAuthUser({
            email: "eden.hazard@gmail.com",
    password: "realmadrid"
        })
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
            <div className="login-page">
                <div className="login-container">
                    <h1 className="login-heading">
                        Login
                    </h1>
                    {formError && <p className="formError-warning-login">Please enter both the fields.</p>}
                    <div className="email-container">
                        {/* <label className="email">Email: </label> */}
                        <input type="email" className="email-input" name="email" placeholder="Email" onChange={inputChangeHandler}/>
                    </div>
                    <div className="password-container">
                        {/* <label className="passwrod">Password: </label> */}
                        <input type={showpassword.type} className="password-input" name="password" placeholder="Password" onChange={inputChangeHandler}/>
                        <span className="show-hide" onClick={hideHandler}>{showpassword.hidden ? "Show" : "Hide"}</span>
                    </div>
                    <div className="login-btn-container">
                        <button className="login-submit-btn" type="submit" onClick={loginSubmit}>Login</button>
                    </div>
                    <div className="login-btn-container">
                        <button className="login-submit-btn" type="submit" onClick={loginAsGuestSubmit}>Login as Guest</button>
                        <p className="signup-text">Don't have an account? <NavLink to="/signup" className="signup-link">Sign Up</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    )
}