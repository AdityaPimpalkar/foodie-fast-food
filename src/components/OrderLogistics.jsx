import React from 'react';

const OrderLogistics = ({ order }) => {
    return (  
        <div className="card text-left shadow-sm">
            <div className="row">
                <div className="col-sm-5">
                    <div className="card-body">
                        <h5>Order Details</h5>
                        <div>Order number <span className="badge badge-light ">{order.order_number}</span></div>
                        <div>Placed on <span className="badge badge-light">{order.placed_on}</span></div>
                        <div>Delivered on <span className="badge badge-light">{order.delivered_on !== "" ?  order.delivered_on: "-"}</span></div>
                        <div>Payment method: <span className="badge badge-light">{order.paymentby.selectedpayment !== "cashondelivery" ? order.paymentby.selectedpayment.card.number : "Cash on delivery" }</span></div>
                        <div>Payment: <span className={order.payment_status === "PENDING" ? "badge badge-warning" : "badge badge-success"}>{order.payment_status}</span></div>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                    <h5>Delivery Address</h5>
                    <div>{order.deliveryaddress.addressLine1}</div>
                    <div>{order.deliveryaddress.addressLine2}</div>
                    <div>{order.deliveryaddress.landmark}</div>
                    <div>{order.deliveryaddress.city}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OrderLogistics;