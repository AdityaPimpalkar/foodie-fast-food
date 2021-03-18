// import React, { Component } from 'react';
import React from "react";
import { Link } from "react-router-dom";

import { url } from "../config.json";
import Login from "./Login";
import Logout from "./Logout";

const Navbar = ({
  user,
  totalCartItems,
  handleLogout,
  isLoggedIn,
  handleLoginSuccess,
  handleLoginError,
}) => {
  const { givenName, imageUrl } = user;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{ zIndex: 1 }}
    >
      <Link to={url} className="navbar-brand col-sm-3 col-md-2 mr-0 ">
        foodie fast foods
      </Link>
      {/* <input className="form-control form-control-dark w-100" type="search" placeholder="Search" aria-label="Search" /> */}

      <div className="navbar-nav ml-auto">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {isLoggedIn ? (
              <React.Fragment>
                <span className="nav-item dropdown user mt-1 mr-2">
                  <span
                    className="text-white"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {/* <i className="fa fa-user-circle fa-lg"></i> */}
                    <img
                      src={imageUrl}
                      width="32"
                      className="rounded-circle mr-2"
                      alt="avatar"
                    />
                    {givenName}
                  </span>
                  <div
                    className="dropdown-content"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item text-left" to={url + "user"}>
                      <i className="fa fa-user fa-lg mr-2"></i> My Profile
                    </Link>
                    <Link
                      className="dropdown-item text-left"
                      to={url + "orders"}
                    >
                      <i className="fa fa-shopping-bag fa-lg mr-2"></i> Orders
                    </Link>
                    <Link className="dropdown-item text-left" to={url}>
                      <i className="fa fa-power-off fa-lg mr-2"></i>
                      <Logout handleLogout={handleLogout} />
                    </Link>
                  </div>
                </span>
                <Link className="nav-item nav-link cart" to={url + "cart"}>
                  <i className="fa fa-shopping-cart fa-lg"></i> &nbsp;
                  <span className="badge badge-primary">
                    {totalCartItems > 0 ? totalCartItems : null}
                  </span>
                </Link>
              </React.Fragment>
            ) : (
              <Login
                handleLoginSuccess={handleLoginSuccess}
                handleLoginError={handleLoginError}
              />
            )}
          </ul>
        </div>
        {/* <form className="form-inline my-5 my-lg-0">
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
