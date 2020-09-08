import React from 'react';
import Joi from 'joi';
import { saveAddress } from '../services/address';
import AddressForm from './AddressForm';
import Form from './Form';
import UserAddress from './UserAddress';

class Address extends Form {
    state = {
        data: {
            "id":"0",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":"",
            "isdefault": false
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
        isdefault: Joi.boolean()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        
        const address = saveAddress(this.state.data);
        this.selectedAddress(address);
        this.toggleClose();
        this.setState({ data: {
            "id":"0",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":"",
            "isdefault": false
        }});
    };

    handleEdit = (address) => {
        this.toggleOpen();
        const addressdata = {...this.state.data};
        addressdata.id = address.id
        addressdata.addressLine1 = address.addressLine1
        addressdata.addressLine2 = address.addressLine2
        addressdata.landmark = address.landmark
        addressdata.city = address.city
        addressdata.isdefault = true
        this.setState({ data: address });
    }

    toggleOpen = () => {
        this.setState({ toggleAddress: true })
    }

    toggleClose = () => {
        this.setState({
        toggleAddress: false,
        errors: {},
        data: {
            "id":"0",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":"",
            "isdefault": false
        }});
    }
    selectedAddress = (address) => {
        this.props.selectedAddress(address);
    }

    render() { 
        const { addressData, isdelete } = this.props;
        const { data, toggleAddress, errors } = this.state;
        return (
            <div className="card">
            <div className="card-header h5 text-left">Address</div>
            <div className="card-body text-left">
            <h5 className="card-title">My addresses</h5>
            <UserAddress 
                addressData={addressData}
                selectedAddress={this.selectedAddress}
                handleEdit={this.handleEdit}
                isdelete={isdelete}
            />   
            </div>
            {toggleAddress ? 
            <AddressForm 
                data={data}
                errors={errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                toggleClose={this.toggleClose}
            />
            :
            <div className="col-sm-12 mb-2">
                <button className="btn btn-primary col-sm-3 text-center" onClick={this.toggleOpen}>Add new address</button>
            </div>
            
            }
            </div>   
            
         );
    }
}
 
export default Address;
