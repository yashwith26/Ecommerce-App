import "./AddressListComponent.css"

import { AddressCard } from "./AddressCard";
import { useContext, useState } from "react";
import { DataContext } from "../../../contexts/DataProvider";
import { ACTIONS } from "../../../reducers/DataReducer";
import { useLocation } from "react-router-dom";

export function AddressListComponents({ address, setSelectedAddress }) {

    const location = useLocation()

    const { ADD_NEW_ADDRESS } = ACTIONS;

    const { dispatchData } = useContext(DataContext)

    const [addressForm, setAddressForm] = useState({});

    const [addressFromShow, setAddressFormShow] = useState(false);

    const inputChangeHandler = (event) => {
        event.preventDefault();
        setAddressForm((addressForm) => ({ ...addressForm, [event.target.name]: event.target.value }))
    }

    const addressSaveHandler = (event) => {
        event.preventDefault();
        setAddressFormShow(false);
        dispatchData({ type: ADD_NEW_ADDRESS, payload: addressForm });
    }

    

    return (
        <>
            <div className="address-list-form-container">

                <div className="address-list-container">
                {!(location?.pathname === "/profile") && <p className="select-address">
                        Select Address
                    </p>}
                    {address.map((oneAddress) => <AddressCard address={oneAddress} setSelectedAddress={setSelectedAddress}/>)}
                </div>

                {!addressFromShow && <div className="add-address">
                    <button className="add-new-address" onClick={() => setAddressFormShow(true)}>Add New Address</button>
                </div>}

                {addressFromShow && <form onSubmit={addressSaveHandler}> <div className="address-form-n-btns">
                    <div className="address-form-container">
                        <input type="text" name="name" placeholder="Enter name" onChange={(e) => inputChangeHandler(e)} required />
                        <input type="text" name="houseNumber" placeholder="Enter house no." onChange={(e) => inputChangeHandler(e)} required />
                        <input type="text" name="street" placeholder="Enter street" onChange={(e) => inputChangeHandler(e)} required />
                        <input type="text" name="city" placeholder="Enter city" onChange={(e) => inputChangeHandler(e)} required />
                        <input type="text" name="state" placeholder="Enter state" onChange={(e) => inputChangeHandler(e)} required />
                        <input type="text" name="pinCode" placeholder="Enter pin code" onChange={(e) => inputChangeHandler(e)} required />
                        <input type="text" name="mobile" placeholder="Enter mobile no." onChange={(e) => inputChangeHandler(e)} required />
                    </div>
                    <div className="save-cancel-btns">
                        <button className="save-btn" type="submit" >
                            Save
                        </button>
                        <button className="cancel-btn" onClick={() => setAddressFormShow(false)}>
                            Cancel
                        </button>
                    </div>
                </div> </form>}

            </div>
        </>
    )
}