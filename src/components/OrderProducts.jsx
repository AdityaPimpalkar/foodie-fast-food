import React from 'react'; 

const OrderProducts = ({ order }) => {
    return (  
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-12">
                {order.products.length <= 2 ?
                <div className="col">
                    {order.products.map((product) => (
                        <span key={product.id}>
                            <div className="fnt-16 badge-pill badge badge-light bg-blue mr-1 mb-1" >
                                <span>{product.name} x{product.selectedItems}</span>
                            </div>
                        </span>
                    ))}
                </div>
                : 
                <div className="col">
                    {order.products.slice(0,2).map((product) => (
                        <span key={product.id}>
                            <div className="fnt-16 badge-pill badge badge-light bg-blue mr-1 mb-1" >
                                <span>{product.name} x{product.selectedItems}</span>
                            </div>
                        </span>
                    ))}
                    <span className="badge-pill badge badge-light mr-1 mb-1">more {order.products.length-2} item(s)</span>
                </div>
                }
                </div>
            </div>
        </div>
    );
}
 
export default OrderProducts;