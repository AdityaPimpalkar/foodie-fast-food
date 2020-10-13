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
                <div className="card-header h5 text-left">My Orders</div>

                {orders.length > 0 ?

                orders.map((order) => (
                    <div className="card text-left" key={order.id}>
                        <div className="card-body"></div>
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