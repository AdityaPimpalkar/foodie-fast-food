import React, { Component } from 'react';
import { getUserDetails } from '../services/user';
import Address from './Address';
import Payments from './Payments';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import { url } from '../config.json';

class User extends Component {
    state = {  
        user:{},
        selected:''
    }

    componentDidMount() {
        const user = getUserDetails();
        this.setState({ user })
    }

    handleClick = (param) => {
        this.setState({ selected:param })
    }

    render() {
        const { user, selected } = this.state; 
        return (  
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="row">
                    <div className="col-md-3 text-left">
                        <div className="card btn mb-2" onClick={() => this.handleClick('user_details')}>
                            <div className="row">
                                <div className="col-md-3  mt-2 mb-2 d-flex align-items-center justify-content-center" >
                                    { user.image !== '' ? null : <i className="fa fa-user-circle fa-2x"></i> }
                                </div>
                                <div className="col text-left mt-2 mb-2 pl-0 pr-0">
                                    Hello,
                                    <div>{user.first_name} {user.last_name}</div>
                                </div>
                            </div>
                        </div>
                        <Link to={ url + "orders"} className="card btn text-left pt-2 pb-2 mb-2">
                            <div className="row">
                                <div className="col-md-3 mt-2 mb-2 d-flex align-items-center justify-content-center">
                                    <i className="fa fa-shopping-bag fa-lg"></i>
                                </div>
                                <div className="col mt-2 mb-2 pl-0 pr-0">
                                    My Orders
                                </div>
                            </div>
                        </Link>
                        <div className="card btn text-left pt-2 pb-2 mb-2" onClick={() => this.handleClick('address')}>
                            <div className="row">
                                <div className="col-md-3 mt-2 mb-2 d-flex align-items-center justify-content-center">
                                    <i className="fa fa-address-card fa-lg"></i>
                                </div>
                                <div className="col mt-2 mb-2 pl-0 pr-0">
                                    Manage Addresses
                                </div>
                            </div>
                        </div>
                        <div className="card btn text-left pt-2 pb-2 mb-2" onClick={() => this.handleClick('payments')}>
                            <div className="row">
                                <div className="col-md-3 mt-2 mb-2 d-flex align-items-center justify-content-center">
                                    <i className="fa fa fa-credit-card fa-lg"></i>
                                </div>
                                <div className="col mt-2 mb-2 pl-0 pr-0">
                                    Saved Cards
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {(() => {
                        switch (selected) {
                            case 'address': return <Address isdelete={true} />;
                            case 'payments': return <Payments isdelete={true} />;
                            case 'user_details': return <UserDetails />;
                            default: return <UserDetails />;
                        }
                        })()}
                    </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default User;