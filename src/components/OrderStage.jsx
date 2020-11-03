import React from 'react';

const OrderStage = ({ order }) => {
    return (  
        <div className="col-md-4">
            {(() => {
            switch (order.order_stage) {
                case 1: return <span className="fnt-16 text-secondary"><i className="fa fa-circle" aria-hidden="true"></i> Your order has been placed</span>;
                case 2: return <span className="fnt-16 text-info"><i className="fa fa-circle" aria-hidden="true"></i> Your order has been processed</span>;
                case 3: return <span className="fnt-16 text-primary"><i className="fa fa-circle" aria-hidden="true"></i> Your order is out for delivery</span>;
                case 4: return <span className="fnt-16 text-success"><i className="fa fa-circle" aria-hidden="true"></i> Your order has been delivered</span>;
                default: return <span className="fnt-16"><i className="fa fa-circle text-danger" aria-hidden="true"></i> We could not place your order</span>;;
            }
            })()}
            <div>Payment: <span className={order.payment_status === "PENDING" ? "badge badge-warning" : "badge badge-success"}>{order.payment_status}</span></div>
        </div>
    );
}
 
export default OrderStage;