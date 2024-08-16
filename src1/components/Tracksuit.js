import React from 'react';
import { useCart } from './CartContext';
import './Tracksuit.css'; 
import Footer from './Footer';

function Tracksuit() {
  const { addToCart } = useCart();

  const tracksuits = [
    { id: 1, name: "Adidas classic Firebird Track", price: 780, imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe7e4b2a156f40aca7acc07e3d76d4a9_9366/Adicolor_Classics_Firebird_Track_Top_Green_IR9905_21_model.jpg" },
    { id: 2, name: "Adidas classic Firebird Track", price: 980, imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/a187db0410ee4696819915362cf07471_9366/Adicolor_Classics_Firebird_Track_Top_Red_IJ7060_21_model.jpg" },
    { id: 3, name: "Adidas classic Firebird Track", price: 580, imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b40cbeb61bbf44ed96aaaf0e00aa0031_9366/Germany_Icon_Jacket_Multicolor_HF4072_21_model.jpg" },
    { id: 4, name: "Adidas classic Firebird Track", price: 880, imageUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/647274a44c4147759ca6c3d6c741c81b_9366/adicolor-classics-firebird-track-top.jpg" },
    { id: 5, name: "Adidas classic Firebird Track", price: 690, imageUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/01f876004e7d43a98e3c754cb006fdf2_9366/adicolor-classics-beckenbauer-track-jacket.jpg" },
    { id: 6, name: "Adidas classic Firebird Track", price: 900, imageUrl: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/304e06157dd6407385318b50a73dacd6_9366/adicolor-classics-firebird-track-top.jpg" },
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
        {tracksuits.map(tracksuit => (
          <div key={tracksuit.id} className='product-card'>
            <div className='product-image' style={{ backgroundImage: `url(${tracksuit.imageUrl})` }}></div>
            <div className='product-details'>
              <h6>{tracksuit.name}</h6>
              <p>Men's Tracksuit<br />1 Color</p>
              <h6>MRP:₹{tracksuit.price}</h6>
              <button onClick={() => addToCart(tracksuit)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Tracksuit;
