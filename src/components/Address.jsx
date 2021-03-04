import React from 'react';
import Joi from 'joi';
import { changeDeliveryAddress, getAddress, saveAddress } from '../services/address';
import AddressForm from './AddressForm';
import Form from './Form';
import UserAddress from './UserAddress';

class Address extends Form {
    state = {
        data: {
            "_id":"",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":"",
            "pincode":"",
            "isdefault": false
        },
        address:[],
        errors:{},
        toggleAddress: false
    }
    async componentDidMount() {
        let address = await getAddress();
        this.setState({ address })
    }
    schema = {
        _id: Joi.string().optional().allow(''),
        addressLine1: Joi.string().min(5).required().label("Flat, House no., Building, Company, Apartment"),
        addressLine2: Joi.string().min(5).required().label("Area, Colony, Street, Sector, Village"),
        landmark: Joi.string().min(5).required().label("Landmark"),
        city: Joi.string().min(5).required().label("Town/City"),
        pincode: Joi.string().min(5).max(6).required().label("Pincode"),
        isdefault: Joi.boolean()
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        
        const address = await saveAddress(this.state.data);
        if(this.props.selectedAddress) this.props.selectedAddress(this.state.data);
        this.toggleClose();
        this.setState({ data: {
            "_id":"",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":"",
            "pincode":"",
            "isdefault": false
        },
        address
        });
    };

    handleEdit = (address) => {
        this.toggleOpen();
        const addressdata = {...this.state.data};
        addressdata._id = address._id
        addressdata.addressLine1 = address.addressLine1
        addressdata.addressLine2 = address.addressLine2
        addressdata.landmark = address.landmark
        addressdata.city = address.city
        addressdata.pincode = address.pincode
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
            "_id":"0",
            "addressLine1":"",
            "addressLine2":"",
            "landmark":"",
            "city":"",
            "pincode":"",
            "isdefault": false
        }});
    }

    selectedAddress = async (addressobj) => {
         let address = await changeDeliveryAddress(addressobj);
        this.setState({ address })
    }

    render() { 
        const { isSelect,isdelete } = this.props;
        const { data, address, toggleAddress, errors } = this.state;
        return (
            <div className="card">
                <div className="card-header h5 text-left">Address</div>
                <div className="card-body text-left">
                    <UserAddress 
                        addressData={address}
                        selectedAddress={this.selectedAddress}
                        handleEdit={this.handleEdit}
                        isSelect={isSelect}
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
