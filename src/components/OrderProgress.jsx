import React from 'react';

const OrderProgress = ({ order }) => {
    return (  
        <div className="card text-center shadow-sm">
            <div className="card-body">
            <div className="row">
                <div className="progressbar-container mb-1">
                    <ul className="progressbar col-sm-12">
                    <li className={order.order_stage >=1 ? "active" : ""}>Ordered</li>
                    <li className={order.order_stage >=2 ? "active" : ""}>Processed</li>
                    <li className={order.order_stage >=3 ? "active" : ""}>Out for Delivery</li>
                    <li className={order.order_stage >=4 ? "active" : ""}>Delivered</li>
                    </ul>
                </div>
            </div>  
            </div>
        </div>
    );
}
 
export default OrderProgress;