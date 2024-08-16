import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className='vid'>
        <h1>SPRINT</h1>
      </div>
      <br />
      <br />
      <div className='nike'>
        <h1>WIN ON AIR</h1>
        <p>Engineered for those who stand out</p>
        <Link to="/products/shoes" className='shop-button'>
          Shop Air
        </Link>
        <br />
        <br />
        <br />
        <div className='nikein'>
          <div className='nikeimg1'></div>
          <div className='nikeimg2'></div>
          <div className='nikeimg3'></div>
        </div>
      </div>
      <div className='adidas'>
        <h1>ALL IN OR NOTHING</h1>
        <p>To be the best sports brand in the world</p>
        <Link to="/products/shoes" className='shop-button'>
          Shop
        </Link>
        <br />
        <br />
        <br />
        <div className='adidasin'>
          <div className='adidasimg1'></div>
          <div className='adidasimg2'></div>
          <div className='adidasimg3'></div>
        </div>
      </div>
      <div className='sports'>
        <h2>Shop by sport</h2>
        <div className='sportsin'>
          <div className='simg1'>
            <button>Cricket</button>
          </div>
          <div className='simg2'>
            <button>Football</button>
          </div>
          <div className='simg3'>
            <button>Basketball</button>
          </div>
        </div>
      </div>
      <br />
      <div className='customize'>
        <h2>YOUR CUSTOMIZATION SERVICE</h2>
        <p>Step into your individuality with custom sneakers that are as unique as you are.</p>
        <Link to="/customize">
          <button>Explore</button>
        </Link>
        <div className='cust'>
          {/* Additional content for the customization section can go here */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
}

export default Home;
