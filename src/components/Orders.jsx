import React, { Component } from 'react'; 
import { getOrders } from '../services/orders';

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
                <div className="card-header h5 text-center">My Orders</div>

                {orders.length > 0 ?

                orders.map((order) => (
                    <div className="card text-left" key={order.order_id}>
                        
                        <div className="card-body">
                            <h6 className="badge badge-secondary">ORDER {order.order_number} | {order.placed_on} </h6>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                        {order.products.map((product) => (
                                            <span key={product.id}>
                                                <div className="fnt-16 badge-pill badge badge-light bg-blue" >
                                                    <span>{product.name} x{product.selectedItems}</span>
                                                </div>
                                                &nbsp;
                                            </span>
                                             
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center"> 
                                
                                <h5>₹{order.order_total}</h5> 
                                    {/* <span>Delivery Address:</span>
                                    <div>{order.deliveryaddress.addressLine1}</div>
                                    <div>{order.deliveryaddress.addressLine2}</div>
                                    <div>{order.deliveryaddress.landmark}</div>
                                    <div>{order.deliveryaddress.city}</div> */}
                                    
                                </div>
                                <div className="col-md-4">
                                    {/* <div className="row">
                                        <div className="progressbar-container mb-1">
                                            <ul className="progressbar col-sm-12">
                                            <li className="active">Ordered</li>
                                            <li>Processed</li>
                                            <li>Out for Delivery</li>
                                            <li>Delivered</li>
                                            </ul>
                                        </div>
                                    </div>   */}
                                    <span className="badge badge-info small fnt-16">{order.order_status_text}</span>
                                    <div>Payment: <span className="badge badge-warning">{order.payment_status}</span></div>
                                   
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>

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