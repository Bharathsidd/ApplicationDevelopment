import './Customize.css';
import { useCart } from './CartContext';
import Footer from './Footer';
function Customize()
{
    const { addToCart } = useCart();
    const products = [
        { id: 1, name: "Nike Air Force 1 '07 Fresh", price: 1500, imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/31733bb2-a3a2-4a40-a917-8ad5bf4cffc1/custom-nike-air-force-1-electric-by-you.png" },
        { id: 2, name: "Nike Air Force 1 '07 Fresh", price: 1600, imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/489ae85c-f091-41c3-8521-70728b76cffe/custom-nike-air-force-1-electric-by-you.png" },
        { id: 3, name: "Nike Air Force 1 '07 LV8", price: 1190, imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1b739964-dd95-4060-bafe-2f7999ece971/custom-nike-sabrina-2-by-you.png" },
        { id: 4, name: "Nike Air Force 1 '07 LV8", price: 1190, imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0ab04620-a75f-4ea5-bce7-3e26a6dec829/custom-dunk-low-unlocked-by-you.png" },
        { id: 5, name: "Nike Air Force 1 '07 LV8", price: 1190, imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/ccc4e107-f81c-4626-b552-977e1ebc8b24/custom-nike-air-max-plus-by-you.png" },
        { id: 6, name: "Nike Air Force 1 '07 LV8", price: 1190, imageUrl: "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/e8e3b479-7c84-4d35-bc3e-90b706bacc39/air-force-1-07-next-nature-se-shoes-tpPRVT.png" },
      ];
    return (
       <div>
        <div className="top">
            <h2>What if you wear a shoe?</h2>
        </div>
        <div className='top2'>
            <p>Let's find out! Be just who you are by putting more youness
                <br></br> in your
shoeness with Sprint By You, Sprint's co-creation service for Members. A<br></br>
little more of this, a little less of that—just have fun customising a shoe<br></br>
that feels more like you.</p>
         <button>Shop</button>
        </div>
        <div className='shoes'>
            <h2>Featured Shoes</h2>
            <div className='product-grid'>
        {products.map(product => (
          <div key={product.id} className='product-card'>
            <div className='product-image' style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
            <div className='product-details'>
            <p style={{ color: 'red', fontSize: '16px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Customized</p>
              <h6>{product.name}</h6>
              <p>Men's Shoe<br />1 Color</p>
              <h6>MRP:₹{product.price}</h6>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
        </div>
        <Footer/>
       </div>
    )
}
export default Customize;