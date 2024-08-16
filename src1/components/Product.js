import React from 'react';
import { useCart } from './CartContext';
import './Product.css';
import Footer from './Footer';

function Product() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Nike Air Force 1 '07 Fresh", price: 1500, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/air-force-1-07-fresh-shoes-bBRnbq.png" },
    { id: 2, name: "Nike Air Force 1 '07 Fresh", price: 1600, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f23de45a-dbda-4522-9dc1-63f1e623b716/air-force-1-07-next-nature-shoes-cg65FM.png" },
    { id: 3, name: "Nike Air Force 1 '07 LV8", price: 1190, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00366317-b552-4167-96f5-824ce1a4ea74/air-force-1-07-lv8-shoes-RR3nh3.png" },
    { id: 4, name: "Nike Air Force 1 '07 Shadow", price: 1400, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6d118a1-7135-4537-81af-7622e24baead/air-force-1-shadow-shoes-DmvLlC.png" },
    { id: 5, name: "Nike Air Force 1 '07 Fresh", price: 1500, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-shoes-VWCc04.png" },
    { id: 6, name: "Nike Air Force 1 '07 Ease on", price: 1300, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/air-force-1-07-fresh-shoes-bBRnbq.png" },
    { id: 7, name: "Nike Court Vision Low", price: 1700, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/court-vision-low-shoes-q0sr67.png" },
    { id: 8, name: "Tatum 2 'Vortex' PF", price: 2100, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bdf52f5-1615-4bdf-9936-355332055c21/tatum-2-legacy-pf-basketball-shoes-WWbXXK.png" },
    { id: 9, name: "Nike Air Force 1 LV8", price: 1800, imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34a5a613-4e87-4fc7-9a3d-a9db1bbda896/air-force-1-lv8-older-shoes-K8PBBc.png" },
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
        {products.map(product => (
          <div key={product.id} className='product-card'>
            <div className='product-image' style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
            <div className='product-details'>
              <h6>{product.name}</h6>
              <p>Men's Shoe<br />1 Color</p>
              <h6>MRP:₹{product.price}</h6>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Product;
