// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { getTotalItems } from '../services/cart';

 const Navbar = ({ totalCartItems }) => {
     return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{zIndex:"auto"}}>
            <span className="navbar-brand col-sm-3 col-md-2 mr-0 ">foodie fast foods</span>
            {/* <input className="form-control form-control-dark w-100" type="search" placeholder="Search" aria-label="Search" /> */}
            
            
            <div className="navbar-nav ml-auto">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link className="nav-item nav-link home" to="/foodie-fast-food/">
                            <i className="fa fa-home fa-lg"></i> &nbsp;
                        </Link>
                        <Link className="nav-item nav-link home" to="/foodie-fast-food/orders" title="Orders">
                            <i className="fa fa-shopping-bag fa-lg"></i>
                        </Link>
                        <Link className="nav-item nav-link cart" to="/foodie-fast-food/cart">
                            <i className="fa fa-shopping-cart fa-lg"></i> &nbsp;<span className="badge badge-primary">{totalCartItems > 0 ? totalCartItems:null }</span>
                        </Link>
                    </ul>
                </div>
                {/* <form className="form-inline my-5 my-lg-0">
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>

    );
 }
 
 export default Navbar;

