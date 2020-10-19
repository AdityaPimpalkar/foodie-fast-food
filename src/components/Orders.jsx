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
            <div className="row">
                <div className="col-md-12">
                <div className="card-header h5 text-center">My Orders</div>

                {orders.length > 0 ?

                orders.map((order) => (
                    <div className="card text-left" key={order.order_id}>
                        <div className="card-header h5 text-left">{order.order_id}</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        {order.products.map((product) => (
                                            <div className="col-md-12" key={product.id}>
                                                <img src={product.img} className="float-left col-sm-2" alt=""></img>
                                                <h6 className="card-title float-left mt-2">
                                                    {product.name} - ₹{product.price}x{product.selectedItems} 
                                                </h6>
                                                <span className="mt-1 float-left mr-2">
                                                    
                                                </span>
                                            </div>
                                        ))}  
                                    </div>
                                </div>
                                <div className="col-md-4">  
                                    <span>Delivery Address:</span>
                                    <div>{order.deliveryaddress.addressLine1}</div>
                                    <div>{order.deliveryaddress.addressLine2}</div>
                                    <div>{order.deliveryaddress.landmark}</div>
                                    <div>{order.deliveryaddress.city}</div>
                                </div>
                                <div className="col-md-4">  
                                    <div>Payment Mode: {order.paymentby.selectedpayment === 'cashondelivery' ? 'Cash On Delivery': '' }</div>
                                    <div>Payment Status: <span className="text-primary">{order.status}</span></div>
                                    <h5>Total Paid - ₹{order.order_total}</h5>
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