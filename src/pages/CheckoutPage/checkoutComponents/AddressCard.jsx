import { useLocation } from "react-router-dom"
import "./AddressCard.css"
import { useContext, useState } from "react";
import { DataContext } from "../../../contexts/DataProvider";
import { ACTIONS } from "../../../reducers/DataReducer";
import { AddressForm } from "./AddressForm";

export function AddressCard({ address, setSelectedAddress }) {

    const [showEditForm, setShowEditForm] = useState(false);

    const { DELETE_ADDRESS, UPDATE_ADDRESS } = ACTIONS;

    const { dispatchData } = useContext(DataContext);

    const location = useLocation();

    const deleteAddress = (id) => dispatchData({ type: DELETE_ADDRESS, payload: id })

    const updateAddress = (id, changedAddress) => dispatchData({type: UPDATE_ADDRESS, payload: {id, changedAddress}})

    const addressSelectionHandler = (e) => {
        setSelectedAddress(e.target.value);
    }

    return (
        <>
            <div className="address-card-n-btns">
                <div className="address-card-container" key={address._id}>
                    {!(location?.pathname === "/profile") && <div className="radio-input">
                        <input type="radio" name="address" required value={address._id} onChange={(e) => addressSelectionHandler(e)}/>
                    </div>}
                    <div className="address-details">
                        <p>{address.name}</p>
                        <p>{`${address.houseNumber}, ${address.street}`}</p>
                        <p>{`${address.city} - ${address.pinCode}`}</p>
                        <p>{address.state}</p>
                        <p>Mobile: {address.mobile}</p>
                    </div>
                </div>
                <div className="edit-dlt-btn">
                    <button className="edit-btn" onClick={() => setShowEditForm(true)}>
                        Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteAddress(address._id)}>
                        Delete
                    </button>
                </div>
            </div>

            {showEditForm && <AddressForm addressDetails={address} setShowEditForm={setShowEditForm} updateAddress={updateAddress}/>}
        </>
    )
}