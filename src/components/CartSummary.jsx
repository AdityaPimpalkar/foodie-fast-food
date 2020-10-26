import React from 'react';

const CartSummary = ({products, grandtotal, deliveryaddress, paymentby, handlePlaceOrder}) => {
    
    const btnState = Object.keys(deliveryaddress).length === 0 || Object.keys(paymentby).length === 0 ? true:false;
    const btntext = paymentby.selectedpayment === "cashondelivery" ? "Place Order": "Procced to payment";
    return ( 
        <div className="col-sm-4">
            <div className="card text-left">
            {products.length > 0 ?

                <div className="card-body">
                    <h5 className="card-title text-center">Summary</h5>
                    {products.map((product) => (
                        <div className="card-text h6" key={product.id}>
                            <div className="col mb-2">
                                {product.name} (₹{product.price}x{product.selectedItems})
                                <span className="float-right">₹{product.total}</span>
                            </div>
                        </div>
                    ))}
                    <hr/>
                    <div className="card-text h5">
                        <div className="col mb-2">
                            Total
                            <span className="float-right"><h4>₹{grandtotal}</h4></span>
                        </div>
                    </div>
                    <button className="btn btn-success btn-block" disabled={btnState} onClick={(e) => handlePlaceOrder(e)}>
                    {btntext}
                    </button>
                    {Object.keys(deliveryaddress).length === 0 && (
                        <div className="help-block text-danger"><i className="fa fa-exclamation-circle"></i> Please choose a delivery address</div>
                    )}
                    {Object.keys(paymentby).length === 0 && (
                        <div className="help-block text-danger"><i className="fa fa-exclamation-circle"></i> Please choose a payment option</div>
                    )}
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
    );
}
 
export default CartSummary;