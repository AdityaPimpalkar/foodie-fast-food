import React from 'react';

const Sidenavbar = (props) => {
    const { totalCartItems } = props;
    return ( 
        <div className="sidenav bg-dark">
            <a href="#about"><i className="fa fa-shopping-cart fa-lg"></i> &nbsp;Cart <span className="badge badge-light">{totalCartItems}</span></a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
        </div>
     );
}
 
export default Sidenavbar;