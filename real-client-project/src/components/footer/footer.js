import React from 'react';
import './footer.css';
import RMZNA from '../../../src/images/logo-for-web.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={RMZNA} alt="Logo" />
      </div>

      <div className="footer-links">
        <h3>Navigation</h3>
        <NavLink exact to="/" className="footer-link">
          Home
        </NavLink>
        <NavLink to="/products" className="footer-link">
          Products
        </NavLink>
        <NavLink to="/about-us" className="footer-link">
          About Us
        </NavLink>
        <NavLink to="/contact-us" className="footer-link">
          Contact Us
        </NavLink>
      </div>

      <div className="footer-categories">
        <h3>Categories</h3>
        <ul>
          <li>
            <NavLink to="/category1" className="footer-link">
              Category 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/category2" className="footer-link">
              Category 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/category3" className="footer-link">
              Category 3
            </NavLink>
          </li>
          <li>
            <NavLink to="/category4" className="footer-link">
              Category 4
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="footer-social-media">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <FaMapMarkerAlt />
            <span>Address</span>
          </li>
          <li>
            <FaEnvelope />
            <span>Email</span>
          </li>
          <li>
            <FaPhone />
            <span>Phone</span>
          </li>
        </ul>
      </div>

      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
