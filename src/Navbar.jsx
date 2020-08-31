import React from 'react';

const Navbar = (props) => {
    //const { itemsCount } = props
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="navbar-nav ml-auto">
            <form className="form-inline my-5 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            
            </div>
        </nav>

     );
}
 
export default Navbar;