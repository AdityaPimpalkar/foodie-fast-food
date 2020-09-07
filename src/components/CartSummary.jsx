import React from 'react';

const CartSummary = ({products, grandtotal}) => {
    return ( 
        <div className="col-sm-4">
            <div className="card text-left sticky-top">
            {products.length > 0 ?

                <div className="card-body">
                    <h5 className="card-title text-center">Summary</h5>
                    {products.map((product) => (
                        <div className="card-text h6" key={product.id}>
                            <div className="col mb-2">
                                {product.name}
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
    );
}
 
export default CartSummary;