import React, { Component } from 'react';   
import { GetOrderDetails } from '../services/orders';
import OrderLogistics from './OrderLogistics';
import OrderProgress from './OrderProgress';
import OrderSummary from './OrderSummary';

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
                            <OrderLogistics order={order}/>
                            
                            <OrderProgress order={order} />
                        </div>
                        <div className="col-md-4">
                            <OrderSummary order={order}/>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default OrderDetails;