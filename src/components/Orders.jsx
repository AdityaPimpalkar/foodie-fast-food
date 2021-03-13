import React, { Component } from "react";
import { getOrders } from "../services/orders";
import { Link } from "react-router-dom";
import OrderCard from "./OrderCard";
import { url } from "../config.json";

class Orders extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    try {
      const { data: orders } = await getOrders();
      this.setState({ orders });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { orders } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-md-11">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <Link to={url}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={url + "user"}>My Account</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Orders
              </li>
            </ol>
          </nav>
          {orders.length > 0 ? (
            orders.map((order) => (
              <Link
                to={url + "order/" + order.order_number}
                className="card card-box text-left mb-4 text-dark btn"
                key={order._id}
              >
                <OrderCard order={order} />
              </Link>
            ))
          ) : (
            <div className="col-md-12">
              <h4 className="underline">
                <u>No orders found</u>
              </h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Orders;
