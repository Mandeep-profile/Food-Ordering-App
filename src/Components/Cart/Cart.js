import React from "react";
import "./Cart.scss";

const Cart = ({ cartItems }) => {
  console.log(cartItems)
  return (
    <div className="cart-card">
      <ul className="card-list">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ItemName}</td>
                <td>{item.quantity}</td>
                <td>{item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default Cart;
