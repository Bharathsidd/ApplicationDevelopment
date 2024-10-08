import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';


const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/users/getall');
      const users = response.data;
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
      
        navigate('/');
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('An error occurred while trying to log in. Please try again later.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign-In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="primary-button">Sign In</button>
      </form>
      <footer>
        <p>New here? <Link to="/register">Create an account</Link>.</p>
        <p><Link to="/">Back to Homepage</Link>.</p>
      </footer>
    </div>
  );
};

export default SignIn;