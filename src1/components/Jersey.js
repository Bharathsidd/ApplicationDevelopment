import React from 'react';
import { useCart } from './CartContext';
import './Jersey.css';
import Footer from './Footer';

function Jersey() {
  const { addToCart } = useCart();

  const jerseys = [
    { id: 1, name: "Manchester United", price: 580, imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/01d9e44f5e83466d9fa2141de61e6ccf_faec/Manchester_United_23-24_Home_Authentic_Jersey_Red_IN3520_dbHM4.jpg" },
    { id: 2, name: "Real Madrid", price: 580, imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/99264286dc5c4543ac154e1a7ded0949_9366/Real_Madrid_23-24_Away_Jersey_Blue_IJ5901_HM6.jpg" },
    { id: 3, name: "Argentina", price: 580, imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2c817b23becc40c49edce727fe0c21c0_9366/Argentina_1994_Away_Jersey_Blue_IS0266_HM1.jpg" },
    { id: 4, name: "Real Madrid", price: 580, imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/78b62417f1e042aeb25e3353d278de3b_9366/Real_Madrid_24-25_Home_Authentic_Jersey_White_IX8095_HM1.jpg" },
    { id: 5, name: "Germany", price: 580, imageUrl: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/449183eb88de46e7a9fe7f1b594fdd4c_9366/germany-2024-home-authentic-jersey.jpg" },
    { id: 6, name: "Germany", price: 580, imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/306755ea12dc49baaf0a2e154133bec9_9366/Germany_1996_Away_Jersey_Green_IT7751_HM4.jpg" },
    
  ];

  return (
    <div>
      <div className='top'>
        <ul>
          <li>Nike</li>
          <li>Adidas</li>
          <li>New Balance</li>
          <li>Asics</li>
          <li>Puma</li>
        </ul>
      </div>
      <div className='product-grid'>
        {jerseys.map(jersey => (
          <div key={jersey.id} className='product-card'>
            <div className='product-image' style={{ backgroundImage: `url(${jersey.imageUrl})` }}></div>
            <div className='product-details'>
              <h6>{jersey.name}</h6>
              <p>Men's Jersey<br />1 Color</p>
              <h6>MRP:₹{jersey.price}</h6>
              <button onClick={() => addToCart(jersey)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Jersey;
