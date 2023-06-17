import { useContext, useState } from "react";
// import "./AddressForm.css"; since we have the same class name for this form as well so those styles have been applying automatically
import { DataContext } from "../../../contexts/DataProvider";
import { ACTIONS } from "../../../reducers/DataReducer";

export function AddressForm({addressDetails, setShowEditForm, updateAddress}) {

    const { ADD_NEW_ADDRESS } = ACTIONS;

    const { dispatchData } = useContext(DataContext)

    const [addressForm, setAddressForm] = useState({...addressDetails});

    const inputChangeHandler = (event) => {
        event.preventDefault();
        setAddressForm((addressForm) => ({ ...addressForm, [event.target.name]: event.target.value }))
    }

    const addressSaveHandler = (event) => {
        event.preventDefault();
        // setAddressFormShow(false);
        dispatchData({ type: ADD_NEW_ADDRESS, payload: addressForm });
    }

    const updateAndHide = () => {
        updateAddress(addressDetails._id, addressForm)
        setShowEditForm(false)
    }

    return (
        <>
            <form onSubmit={addressSaveHandler}> <div className="address-form-n-btns">
                    <div className="address-form-container">
                        <input type="text" name="name" placeholder="Enter name" onChange={(e) => inputChangeHandler(e)} required value={addressForm.name}/>
                        <input type="text" name="houseNumber" placeholder="Enter house no." onChange={(e) => inputChangeHandler(e)} required value={addressForm.houseNumber}/>
                        <input type="text" name="street" placeholder="Enter street" onChange={(e) => inputChangeHandler(e)} required value={addressForm.street}/>
                        <input type="text" name="city" placeholder="Enter city" onChange={(e) => inputChangeHandler(e)} required value={addressForm.city}/>
                        <input type="text" name="state" placeholder="Enter state" onChange={(e) => inputChangeHandler(e)} required value={addressForm.state}/>
                        <input type="text" name="pinCode" placeholder="Enter pin code" onChange={(e) => inputChangeHandler(e)} required value={addressForm.pinCode}/>
                        <input type="text" name="mobile" placeholder="Enter mobile no." onChange={(e) => inputChangeHandler(e)} required value={addressForm.mobile}/>
                    </div>
                    <div className="save-cancel-btns">
                        <button className="save-btn" type="submit" onClick={() => updateAndHide()}>
                            Save
                        </button>
                        <button className="cancel-btn" onClick={() => setShowEditForm(false)}>
                            Cancel
                        </button>
                    </div>
                </div> </form>
        </>
    )
}