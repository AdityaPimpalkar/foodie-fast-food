import React from 'react';
import { Link } from "react-router-dom";
const CartProducts = ({products, addToCart, removeFromCart, deleteFromCart}) => {
    return (
        products.length > 0 ? 

        products.map((product) => (
            <div className="card text-left" key={product._id}>
                <div className="card-body">
                <img src={product.img} className="float-left col-sm-1" alt=""></img>
                <h5 className="card-title float-left mt-2">
                    {product.name} 
                </h5>
                <div className="col-sm-3 float-right">
                    <button
                        className="btn btn-primary float-left mr-2"
                        onClick={() => addToCart(product)}
                    >
                    <i className="fa fa-plus"></i>
                    </button>
                    <span className="mt-1 float-left mr-2">
                        {product.selectedItems ? product.selectedItems : 0}
                    </span>
                    <button
                        className="btn btn-info mr-3"
                        onClick={() => removeFromCart(product)}
                        disabled={product.selectedItems ? false : true}
                    >
                    <i className="fa fa-minus"></i>
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteFromCart(product)}
                    >
                    <i className="fa fa-trash"></i>
                    </button>
                </div>
                </div>
            </div>
        ))

        :
                    
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">Your cart is empty!</h5>
                <Link to="/">
                    <button className="btn btn-primary">Add</button>
                </Link>
            </div>
        </div>
    );
}
 
export default CartProducts;