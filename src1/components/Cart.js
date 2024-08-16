// src/components/Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart, totalAmount } });
  };

  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className='empty-cart-message'>Your cart is empty.</p>
      ) : (
        <>
          <ul className='cart-items'>
            {cart.map(item => (
              <li key={item.id} className='cart-item'>
                <img src={item.imageUrl} alt={item.name} className='item-image' />
                <div className='item-info'>
                  <h6>{item.name}</h6>
                  <p>Price: ₹{item.price.toFixed(2)}</p>
                  <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className='cart-summary'>
            <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
            <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
