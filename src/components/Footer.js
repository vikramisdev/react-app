import React from 'react';
import '../components-css/Footer.css';
import { Instagram, Linkedin, Facebook, TwitterX } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><strong>Email:</strong> support@shopanything.com</li>
            <li><strong>Phone:</strong> +911234567890</li>
            <li><strong>Address:</strong> Gangapur Road, Nashik, 423502</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="https://facebook.com/shopanything" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://twitter.com/shopanything" target="_blank" rel="noopener noreferrer">
              <TwitterX />
            </a>
            <a href="https://instagram.com/shopanything" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://linkedin.com/company/shopanything" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>

      </div>
      <div className="footer-section footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopAnything. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
