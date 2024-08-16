// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Find A Store</a></li>
                    <li><a href="#">Become A Member</a></li>
                    <li><a href="#">Send Us Feedback</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Help</h4>
                <ul>
                    <li><a href="#">Get Help</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Payment Options</a></li>
                    <li><a href="#">Contact Us On Sprint.com Inquiries</a></li>
                    <li><a href="#">Contact Us On All Other Inquiries</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About Sprint</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Sustainability</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Sprint, Inc. All rights reserved</p>
                <div className="footer-links">
                    <a href="#">Guides</a>
                    <a href="#">Terms of Sale</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Sprint Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
