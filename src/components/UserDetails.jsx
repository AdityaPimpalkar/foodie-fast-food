import React from 'react';
import { getUserDetails } from '../services/user';
import Form from './Form';
import Joi from 'joi';

class UserDetails extends Form {
    state = {  
        data:{
            first_name:'',
            last_name:'',
            email_address:''
        },
        errors:{}
    }

    schema = {
        first_name: Joi.string().min(5).max(20).required().label("First Name"),
        last_name: Joi.string().min(5).max(20).required().label("Last Name"),
        email_address: Joi.string().email({ tlds: { allow: false } }).required().label("Email Address")
    }
    componentDidMount() {
        const user = getUserDetails();
        const data = {
            first_name: user.first_name,
            last_name: user.last_name,
            email_address: user.email_address
        }
        this.setState({ data });
    }

    render() { 
        const { data, errors } = this.state;
        return (  
            <div className="card text-left">
                <div className="card-header h5">Personal Information </div>
                <div className="card-body">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <div className="col-sm-12">
                                <label>First Name</label>
                                <input type="text" className={errors.first_name ?  "form-control is-invalid": "form-control"} id="first_name" name="first_name" value={data.first_name} autoComplete="false"  placeholder="" onChange={(e) => this.handleChange(e)} />
                                {errors.first_name && (
                                    <span className="help-block text-danger">{errors.first_name}</span> 
                                )}
                                {/* onChange={(e) => handleChange(e)} */}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="col-sm-12">
                                <label>Last Name</label>
                                <input type="text" className={errors.last_name ?  "form-control is-invalid": "form-control"} id="last_name" name="last_name" value={data.last_name} autoComplete="false"  placeholder="" onChange={(e) => this.handleChange(e)} />
                                {errors.last_name && (
                                    <span className="help-block text-danger">{errors.last_name}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-sm-6">
                            <div className="col-sm-12">
                                <label>Email Address</label>
                                <input type="text" className={errors.email_address ?  "form-control is-invalid": "form-control"} id="email_address" name="email_address" value={data.email_address} autoComplete="false"  placeholder="" onChange={(e) => this.handleChange(e)} />
                                {errors.email_address && (
                                    <span className="help-block text-danger">{errors.email_address}</span> 
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserDetails;