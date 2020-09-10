import React from 'react';

const AddressForm = ({ data, errors, handleChange, handleSubmit, toggleClose}) => {
    return ( 
        <div className="card-body text-left">
        <div className="card">
            <div className="card-body">
                <div className="row mb-2">
                <div className="col-sm-12">
                    <label>Flat, House no., Building, Company, Apartment</label>
                    <input type="text" className={errors.addressLine1 ?  "form-control is-invalid": "form-control"} id="addressLine1" name="addressLine1" value={data.addressLine1} autoComplete="false" onChange={(e) => handleChange(e)} placeholder="" />
                    {errors.addressLine1 && (
                        <span className="help-block text-danger">{errors.addressLine1}</span>
                    )}
                </div>
                <div className="col-sm-12">
                    <label>Area, Colony, Street, Sector, Village</label>
                    <input type="text" className={errors.addressLine2 ?  "form-control is-invalid": "form-control"} id="addressLine2" name="addressLine2" value={data.addressLine2} autoComplete="false" onChange={(e) => handleChange(e)} placeholder="" />
                    {errors.addressLine2 && (
                        <span className="help-block text-danger">{errors.addressLine2}</span>
                    )}
                </div>
                <div className="col-sm-12">
                    <label>Landmark</label>
                    <input type="text" className={errors.landmark ?  "form-control is-invalid": "form-control"} id="landmark" name="landmark" value={data.landmark} autoComplete="false" onChange={(e) => handleChange(e)} placeholder="" />
                    {errors.landmark && (
                        <span className="help-block text-danger">{errors.landmark}</span>
                    )}
                </div>
                <div className="col-sm-12">
                    <label>Town/City</label>
                    <input type="text" className={errors.city ?  "form-control is-invalid": "form-control"} id="city" name="city" value={data.city} autoComplete="false" onChange={(e) => handleChange(e)} placeholder="" />
                    {errors.city && (
                        <span className="help-block text-danger">{errors.city}</span>
                    )}
                </div>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    <button className="btn btn-primary btn-block" onClick={(e) => handleSubmit(e)} disabled={Object.keys(errors).length > 0 ? false:true}>
                        Save and deliver here
                    </button>

                </div>
                <div className="col-sm-6">
                    <button className="btn btn-primary btn-info btn-block" onClick={() => toggleClose()}>Cancel</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default AddressForm;