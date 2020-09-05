import React, { Component } from 'react';
import Joi from 'joi';
import { saveAddress } from '../services/address';

class Address extends Component {
    state = {
        data: {
            "id":"",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":""
        },
        errors:{},
        toggleAddress: false
    }

    schema = {
        id: Joi.string(),
        addressLine1: Joi.string().min(5).required().label("Flat, House no., Building, Company, Apartment"),
        addressLine2: Joi.string().min(5).required().label("Area, Colony, Street, Sector, Village"),
        landmark: Joi.string().min(5).required().label("Landmark"),
        city: Joi.string().min(5).required().label("Town/City"),
    }

    validate = () => {
        const { error } = Joi.object(this.schema).validate(this.state.data);
        if(error) {
            const errors = {};
            for (let item of error.details) errors[item.path[0]] = item.message;
            return errors;
        }else {
            return null
        }
    };
    
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = Joi.object({
            [name]: this.schema[name]
        });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        saveAddress(this.state.data);
        this.toggleClose();
        this.setState({ data: {
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":""
        }});
    };
      
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
        
    };

    handleEdit = (address) => {
        this.toggleOpen();
        const data = {...this.state.data}
        data.id = address.id
        data.addressLine1 = address.addressLine1
        data.addressLine2 = address.addressLine2
        data.landmark = address.landmark
        data.city = address.city
        this.setState({ data });
    }

    toggleOpen = () => {
        this.setState({ toggleAddress: true })
    }

    toggleClose = () => {
        this.setState({
        toggleAddress: false,
        errors: {},
        data: {
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":""
        }});
    }

    render() { 
        const { addressData, isdelete } = this.props;
        const { data, toggleAddress, errors } = this.state;
        return (
            <div className="card">
            <div className="card-header h5 text-left">Address</div>
            <div className="card-body text-left">
            <h5 className="card-title">Saved addresses</h5>
                {addressData.saved.map((address) => (
                    <div className="row mb-2 text-left" key={address.id}>
                    <div className="col-sm-1 text-center align-self-center">
                        <input type="radio" name="gridRadios" value={address.id} defaultChecked={addressData.default === address.id ? true:false} />
                    </div>
                    <div className="col-sm-7 font-weight-bold font-italic">
                        {address.addressLine1} {address.addressLine2} {address.landmark} {address.city}
                    </div>
                    <div className="col-sm-3">
                        {isdelete ? <button className="btn btn-danger float-right" ><i className="fa fa-trash"></i></button>:null}
                        <button className="btn btn-primary float-right mr-2" onClick={() => this.handleEdit(address)}><i className="fa fa-pencil"></i></button>
                    </div>
                    </div>
                ))}
            </div>
            {toggleAddress ? 

            <div className="card-bodyd text-left">
                <div className="card">
                    <div className="card-body">
                        <div className="row mb-2">
                        <div className="col-sm-12">
                            <label>Flat, House no., Building, Company, Apartment</label>
                            <input type="text" className="form-control" id="addressLine1" name="addressLine1" value={data.addressLine1} onChange={this.handleChange} placeholder="" />
                            {errors.addressLine1 && (
                                <div className="alert alert-danger" role="alert">
                                {errors.addressLine1}
                                </div>
                            )}
                        </div>
                        <div className="col-sm-12">
                            <label>Area, Colony, Street, Sector, Village</label>
                            <input type="text" className="form-control" id="addressLine2" name="addressLine2" value={data.addressLine2} onChange={this.handleChange} placeholder="" />
                            {errors.addressLine2 && (
                                <div className="alert alert-danger" role="alert">
                                {errors.addressLine2}
                                </div>
                            )}
                        </div>
                        <div className="col-sm-12">
                            <label>Landmark</label>
                            <input type="text" className="form-control" id="landmark" name="landmark" value={data.landmark} onChange={this.handleChange} placeholder="" />
                            {errors.landmark && (
                                <div className="alert alert-danger" role="alert">
                                {errors.landmark}
                                </div>
                            )}
                        </div>
                        <div className="col-sm-12">
                            <label>Town/City</label>
                            <input type="text" className="form-control" id="city" name="city" value={data.city} onChange={this.handleChange} placeholder="" />
                            {errors.city && (
                                <div className="alert alert-danger" role="alert">
                                {errors.city}
                                </div>
                            )}
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-primary btn-block" onClick={this.handleSubmit} disabled={Object.keys(errors).length > 0 ? true:false}>
                                Save and deliver here
                            </button>

                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-primary btn-info btn-block" onClick={this.toggleClose}>Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <button className="btn btn-primary" onClick={this.toggleOpen}>Add new address</button>
            }
              
                
            </div>   
            
         );
    }
}
 
export default Address;
