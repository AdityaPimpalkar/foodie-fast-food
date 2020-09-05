import React from "react";
import { Link } from "react-router-dom";
import Address from "./Address";


const Cart = ({ productData,cartData,addToCart,removeFromCart,deleteFromCart,addressData }) => {
    let grandTotal = 0;
    const products = cartData.map((cartObj) => {
    let product = productData.find(
      (product) => product.id === cartObj.productId
    );
    product = { ...product, selectedItems: cartObj.selectedItems };
    return product;
  })

  function totalPrice (price,totalItems) {
    grandTotal += price*totalItems
    return price*totalItems
  }

  return (
    <React.Fragment>
      
      <div className="row">
        <div className="col-sm-8">
          <div className="card-header h5 text-left">My Cart</div>
          {products.length > 0 ?

            products.map((product) => (
                <div className="card text-left" key={product.id}>
                    <div className="card-body">
                    <img src={product.img} className="float-left col-sm-1" alt=""></img>
                    <h5 className="card-title float-left mt-2">
                        {product.name} 
                        {/* {totalPrice(product.price,product.selectedItems)} */}
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
          }

          {products.length > 0 ?
            <Address addressData={addressData} isdelete={false} />
            :
            null
          }
        </div>
        
        
        <div className="col-sm-4">
            <div className="card text-left sticky-top">
            {products.length > 0 ?

                <div className="card-body">
                    <h5 className="card-title text-center">Summary</h5>
                    {products.map((product) => (
                        <div className="card-text h6" key={product.id}>
                            <div className="col mb-2">
                                {product.name}
                                <span className="float-right">₹{totalPrice(product.price,product.selectedItems)}</span>
                            </div>
                        </div>
                    ))}
                    <hr/>
                    <div className="card-text h5">
                        <div className="col mb-2">
                            Total
                            <span className="float-right"><h4>₹{grandTotal}</h4></span>
                        </div>
                    </div>
                    <span className="btn btn-success btn-block">
                    Place Order
                    </span>
                </div>
                
                :

                <div className="card-body text-center">
                    <h5 className="card-title">Summary</h5>
                    <p className="card-text">
                        No items in cart!
                    </p>
                </div>
            }
            
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
