import React, { Component } from 'react'; 
import { getOrders } from '../services/orders';
import { Link } from 'react-router-dom';
class Orders extends Component {
    state = {  
        orders: []
    }

    componentDidMount() {
        const orders = getOrders();
        this.setState({ orders });   
    }

    render() {
        const { orders } = this.state; 
        return ( 
            <div className="row justify-content-center">
                <div className="col-md-10">
                {/* <div className="card-header h5 text-center">My Orders</div> */}

                {orders.length > 0 ?

                orders.map((order) => (
                    <Link to={"/foodie-fast-food/order/" + order.order_number} className="card card-box text-left mb-4 text-dark btn" key={order.order_id}>
                        
                        <div className="card-body">
                            {/* <h6 className="badge badge-secondary">ORDER {order.order_number} | {order.placed_on} </h6> */}
                            <div className="row">
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
                                <div className="col-md-4 text-center"> 
                                    <h5>₹{order.order_total}</h5> 
                                </div>
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
                            </div>
                        </div>
                    </Link>

                ))

                :
                null

                }
                </div>
            </div>
        );
    }
}
 
export default Orders;