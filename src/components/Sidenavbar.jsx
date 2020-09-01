import React from 'react';
import { Link } from 'react-router-dom';

const Sidenavbar = (props) => {
    const { totalCartItems } = props;

    return ( 
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <Link className="nav-item nav-link home" to="/">
                        <i className="fa fa-home fa-lg"></i> &nbsp;Home
                    </Link>
                    <Link className="nav-item nav-link cart" to="/cart">
                        <i className="fa fa-shopping-cart fa-lg"></i> &nbsp;Cart <span className="badge badge-dark">{totalCartItems > 0 ? totalCartItems:null }</span>
                    </Link>
                </ul>
            </div>
        </nav>
     );
}
 
export default Sidenavbar;