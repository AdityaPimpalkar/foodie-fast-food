import React, { Component } from 'react'; 
import { getOrders } from '../services/orders';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';
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
                {orders.length > 0 ?

                orders.map((order) => (
                    <Link to={"/foodie-fast-food/order/" + order.order_number} className="card card-box text-left mb-4 text-dark btn" key={order.order_id}>
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