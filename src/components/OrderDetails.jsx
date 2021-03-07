import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GetOrderDetails } from "../services/orders";
import OrderLogistics from "./OrderLogistics";
import OrderProgress from "./OrderProgress";
import OrderSummary from "./OrderSummary";
import { url } from "../config.json";

class OrderDetails extends Component {
  state = {
    order: {
      delivered_on: "",
      deliveryaddress: {},
      order_id: 0,
      order_number: "",
      payment_status: "",
      order_stage: 0,
      paymentby: {
        selectedpayment: { card: {} },
      },
      placed_on: "",
      products: [],
      order_total: 0,
      user_id: "",
    },
  };

  async componentDidMount() {
    const previousOrderState = this.state.order;
    try {
      let order_number = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
      );
      let { data: order } = await GetOrderDetails(order_number);
      if (order.length > 0) {
        order = order[0];
        this.setState({ order });
      }
    } catch (error) {
      toast.error(error.message);
      this.setState({ previousOrderState });
    }
  }
  render() {
    const { order } = this.state;
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <div className="col-sm-11">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white">
                <li className="breadcrumb-item">
                  <Link to={url}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={url + "user"}>My Account</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={url + "orders"}>Orders</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {order.order_number}
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-sm-8">
                <OrderLogistics order={order} />

                <OrderProgress order={order} />
              </div>
              <div className="col-md-4">
                <OrderSummary order={order} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderDetails;
