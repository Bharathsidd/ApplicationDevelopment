import React from 'react';
import { useCart } from './CartContext';
import './Hoodies.css'; 
import Footer from './Footer';

function Hoodie() {
  const { addToCart } = useCart();

  const hoodies = [
    { id: 1, name: "Nike Sportswear", price: 1280, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67a7858c-f257-4c73-bd01-f2b63b5a60ba/sportswear-woven-unlined-anorak-Nb4R0H.png" },
    { id: 2, name: "Jordan Brooklyn Fleece", price: 980, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fbffe4f0-6fd3-4ef4-9345-1637893ea210/jordan-brooklyn-fleece-pullover-hoodie-gVMGlC.png" },
    { id: 3, name: "Kobe", price: 580, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/96c19e69-4b06-4450-bfcc-cf81cf8c4aca/kobe-dri-fit-standard-issue-pullover-basketball-hoodie-c1K1X0.png" },
    { id: 4, name: "Nike's Club Fleece", price: 880, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0d6ef07-c448-4aae-ac3a-e988d65a158e/club-fleece-oversized-french-terry-pullover-hoodie-Q4CFQt.png" },
    { id: 5, name: "Jordan Sport Hoop Fleece", price: 690, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d7f4dae-b89c-4349-967d-feb0a343bd57/jordan-sport-hoop-fleece-dri-fit-hoodie-Z1DbBr.png" },
    { id: 6, name: "Nike's Sportswear", price: 900, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8daab1e0-3f5a-4d1a-84e4-a2b5565589e4/sportswear-tech-fleece-windrunner-hoodie-hXT8wQ.png" },
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
        {hoodies.map(hoodie => (
          <div key={hoodie.id} className='product-card'>
            <div className='product-image' style={{ backgroundImage: `url(${hoodie.imageUrl})` }}></div>
            <div className='product-details'>
              <h6>{hoodie.name}</h6>
              <p>Men's Hoodie<br />1 Color</p>
              <h6>MRP:₹{hoodie.price}</h6>
              <button onClick={() => addToCart(hoodie)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Hoodie;
