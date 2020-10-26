import React, { Component } from 'react';   
import { GetOrderDetails } from '../services/orders';

class OrderDetails extends Component {
    state = { 
        order: {
            delivered_on: "",
            deliveryaddress: {},
            order_id: 0,
            order_number: "",
            payment_status: "",
            order_stage: 0,
            paymentby:{
                selectedpayment: {card:{}}
            },
            placed_on: "",
            products: [],
            order_total: 0,
            user_id: ""
        } 
    }

    componentDidMount() {
        let order_number = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
        const order = GetOrderDetails(order_number);
        this.setState({ order });   
    }
    render() { 
        const { order } = this.state
        return (  
            <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-sm-11">
                    <div className="row">
                    <div className="col-sm-8">
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
                    </div>
                    <div className="col-md-4">
                        <div className="card text-left shadow-sm">
                            <table className="table">
                                <tbody>
                                {order.products.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img src={product.img} className="float-left col-sm-2" alt=""></img>
                                            <span>
                                                {product.name} (₹{product.price}x{product.selectedItems})
                                            </span>
                                        </td>
                                        <td>
                                            ₹{product.price*product.selectedItems}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td><span className="col-sm-2">Total</span></td>
                                        <td className="fnt-16"><b>₹{order.order_total}</b></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="card-body">
                         
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default OrderDetails;