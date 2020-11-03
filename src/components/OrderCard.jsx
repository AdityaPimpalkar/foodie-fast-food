import React from 'react';
import OrderProducts from './OrderProducts';
import OrderStage from './OrderStage';

const OrderCard = ({ order }) => {
    return (  
        <div className="card-body">
            <div className="row">
                
                <OrderProducts order={order}/>

                <div className="col-md-4 text-center"> 
                    <h5>₹{order.order_total}</h5> 
                </div>

                <OrderStage order={order}/>
            </div>
        </div>
    );
}
 
export default OrderCard;