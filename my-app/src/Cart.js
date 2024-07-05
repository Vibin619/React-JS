// Cart.js

import React from 'react';
import './Cart.css';
import './App.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container mt-5">
      <h1  className="text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4" style={{ width: "18rem" }}>
                <img src={item.product_img} className="card-img-top" alt={item.product_name} height="250px" style={{ backgroundColor: '#f8f9fa' }} />
                <div id="cont" className="card-body cart-centre">
                  <h5 className="card-title ">{item.product_name}</h5>
                  <p className="card-text "><strong> ₹{item.product_price}</strong></p>
                  <button onClick={() => removeFromCart(index)} className="btn" id="bttn">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
