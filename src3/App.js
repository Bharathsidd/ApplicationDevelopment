import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tracksuit from './components/Tracksuit';
import NavScrollExample from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Product from './components/Product';
import Cart from './components/Cart';
import Jersey from './components/Jersey';
import Hoodie from './components/Hoodies';
import CheckoutPage from './components/Checkout';
import Customize from './components/Customize';

function App() {
  return (
    <Router>
      <div className="App">
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products/:shoes" element={<Product />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/jerseys" element={<Jersey />} />
          <Route path="/products/tracksuits" element={<Tracksuit />} />
          <Route path="/products/hoodies" element={<Hoodie />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
