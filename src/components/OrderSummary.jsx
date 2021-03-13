import React from "react";

const OrderSummary = ({ order }) => {
  return (
    <div className="card text-left shadow-sm">
      <table className="table">
        <tbody>
          {order.products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={product.img}
                  className="float-left col-sm-2"
                  alt=""
                ></img>
                <span>
                  {product.name} (₹{product.price}x{product.selectedItems})
                </span>
              </td>
              <td>₹{product.price * product.selectedItems}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <span className="col-sm-2">Total</span>
            </td>
            <td className="fnt-16">
              <b>₹{order.order_total}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderSummary;
