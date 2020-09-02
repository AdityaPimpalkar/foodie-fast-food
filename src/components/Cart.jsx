import React from "react";
import { Link } from "react-router-dom";
import  user  from '../services/user.js'

const Cart = ({ productData,cartData,addToCart,removeFromCart,deleteFromCart }) => {
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
  const { address } = user
  return (
    <React.Fragment>
      <div className="card-header h5 text-left">My Cart</div>
      <div className="row">
        <div className="col-sm-8">
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
            
          <div class="card text-left">
            <div className="card-body">
              <h5 className="card-title">Address <button className="btn btn-primary">New Address</button></h5>
              {address.map((address) => (
                  <div className="row mb-2" key={address.id}>
                    <div className="col-sm-1 text-center align-self-center">
                      <input type="radio" name="gridRadios" value={address.id} />
                    </div>
                    <div className="col-sm-7">
                      {address.addressLine1} {address.addressLine2} {address.landmark} {address.city}
                    </div>
                  </div>
              ))}
            </div>
          </div>  
          
          
        </div>
        
        
        <div className="col-sm-4">
            <div className="card text-left">
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
