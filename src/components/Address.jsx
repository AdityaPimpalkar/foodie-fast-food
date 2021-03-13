import React from "react";
import Joi from "joi";
import {
  changeDeliveryAddress,
  getAddress,
  saveAddress,
  updateAddress,
} from "../services/address";
import AddressForm from "./AddressForm";
import Form from "./Form";
import UserAddress from "./UserAddress";
import { toast } from "react-toastify";
import { Card } from "react-bootstrap";

class Address extends Form {
  state = {
    data: {
      _id: "",
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      city: "",
      pincode: "",
      isdefault: false,
    },
    address: [],
    errors: {},
    isEdit: false,
    toggleAddress: false,
  };
  async componentDidMount() {
    let address = await getAddress();
    this.setState({ address });
  }
  schema = {
    _id: Joi.string().optional().allow(""),
    addressLine1: Joi.string()
      .min(5)
      .required()
      .label("Flat, House no., Building, Company, Apartment"),
    addressLine2: Joi.string()
      .min(5)
      .required()
      .label("Area, Colony, Street, Sector, Village"),
    landmark: Joi.string().min(5).required().label("Landmark"),
    city: Joi.string().min(5).required().label("Town/City"),
    pincode: Joi.string().min(5).max(6).required().label("Pincode"),
    isdefault: Joi.boolean(),
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const address = await saveAddress(this.state.data);
    if (this.props.selectedAddress) this.props.selectedAddress(this.state.data);
    this.setState({ address });
    this.toggleClose();
  };

  handleUpdate = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const { data: address } = await updateAddress(this.state.data);
    if (this.props.selectedAddress) this.props.selectedAddress(this.state.data);
    this.setState({ address });
    this.toggleClose();
  };

  toggleClose = () => {
    this.setState({
      isEdit: false,
      toggleAddress: false,
      errors: {},
      data: {
        _id: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        pincode: "",
        isdefault: false,
      },
    });
  };

  selectedAddress = async (addressobj) => {
    try {
      let { data: address } = await changeDeliveryAddress(addressobj);
      if (address) address = address.Addresses;
      this.setState({ address });
    } catch (error) {
      toast.error(error.message);
    }
  };

  render() {
    const { isSelect, isdelete } = this.props;
    const { data, address, isEdit, toggleAddress, errors } = this.state;
    return (
      <Card>
        <Card.Header>
          <h5>Address</h5>
        </Card.Header>
        <div className="card-body text-left">
          <UserAddress
            addressData={address}
            selectedAddress={this.selectedAddress}
            handleEdit={this.handleEdit}
            isSelect={isSelect}
            isdelete={isdelete}
          />
        </div>
        {toggleAddress ? (
          <AddressForm
            data={data}
            errors={errors}
            isEdit={isEdit}
            toggleClose={this.toggleClose}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleUpdate={this.handleUpdate}
          />
        ) : (
          <div className="col-sm-12 mb-2">
            <button
              className="btn btn-primary col-sm-3 text-center"
              onClick={this.toggleOpen}
            >
              Add new address
            </button>
          </div>
        )}
      </Card>
    );
  }
}

export default Address;
