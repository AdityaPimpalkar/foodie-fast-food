import React, { Component } from 'react'; 
import { getOrders } from '../services/orders';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';
import { url } from '../config.json';

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
                <div className="col-md-11">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-white">
                        <li className="breadcrumb-item"><Link to={url}>Home</Link></li>
                        <li className="breadcrumb-item"><Link to={url + "user"}>My Account</Link></li>
                        <li className="breadcrumb-item active"  aria-current="page">Orders</li>
                    </ol>
                </nav>
                {orders.length > 0 ?

                orders.map((order) => (
                    <Link to={url + "order/" + order.order_number} className="card card-box text-left mb-4 text-dark btn" key={order.order_id}>
                        <OrderCard order={order} />
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