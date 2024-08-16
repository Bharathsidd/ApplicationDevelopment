// src/components/Checkout.js
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const { cart, totalAmount } = location.state || { cart: [], totalAmount: 0 };

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

  const toggleAddressForm = () => {
    setShowAddressForm(!showAddressForm);
  };

  const togglePaymentOptions = () => {
    setShowPaymentOptions(!showPaymentOptions);
  };
  const toggleDeliveryOptions = () => {
    setShowDeliveryOptions(!showDeliveryOptions);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-section">
        <div className="contact">
          <h2>CONTACT</h2>
          <input type="email" placeholder="Email *" />
        </div>

        <div className="address">
          <h2 onClick={toggleAddressForm} style={{ cursor: "pointer" }}>
            ADDRESS
          </h2>
          {showAddressForm && (
            <div className="address-form">
              <h3>Delivery address</h3>
              <div className="form-group">
                <input type="text" placeholder="First Name *" />
                <input type="text" placeholder="Last Name *" />
              </div>
              <input type="text" placeholder="Street Address *" />
              <input type="text" placeholder="Landmark *" />
              <div className="form-group">
                <input type="text" placeholder="Additional info" />
                <input type="text" placeholder="City *" />
              </div>
              <div className="form-group">
                <select>
                  <option value="" disabled selected>
                    State
                  </option>
                  <option value="state1">Tamil Nadu</option>
                  <option value="state2">Kerala</option>
                </select>
                <input type="text" placeholder="Pin Code *" />
              </div>
              <p>Country: India</p>
              <input type="text" placeholder="Mobile Number *" />
              <p style={{ fontSize: "12px", color: "#888" }}>
                We will only call you if there are questions regarding your order.
              </p>
            </div>
          )}
        </div>

        <div className="delivery-options">
          <h2 onClick={toggleDeliveryOptions} style={{ cursor: "pointer" }}>DELIVERY OPTIONS</h2>
          <p>Standard Delivery</p>
          <p>Free</p>
          <p>Delivery within:- Coimbatore, Metro Cities: 2-3 Days & Others: 3-5 Days</p>
        </div>

        <div className="payment">
          <h2 onClick={togglePaymentOptions} style={{ cursor: "pointer" }}>
            PAYMENT
          </h2>
          {showPaymentOptions && (
            <div className="payment-options">
              <p>Payments are SSL encrypted so that your credit card and payment details stay safe.</p>
              <div className="payment-method">
                <button>UPI</button>
              </div>
              <div className="payment-method">
                <button>Credit/Debit Card</button>
              </div>
              <div className="payment-method">
                <button>NET BANKING</button>
              </div>
              <div className="place-order">
                <button>PLACE ORDER</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="side">
          <div className="cont"></div>
      </div>

    </div>
  );
};

export default Checkout;
