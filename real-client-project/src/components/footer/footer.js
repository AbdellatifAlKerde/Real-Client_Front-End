import "./footer.css";
import RMZNA from "../../../src/images/logo-for-web.png";
import { NavLink } from "react-router-dom";
import facebookIcon from "../../../src/images/facebook.png";
import instagramIcon from "../../../src/images/instagram-logo.png";
import whatsappIcon from "../../../src/images/whatsapp.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-logo">
        <img src={RMZNA} alt="rmnza-logo"></img>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-link">
              Products
            </NavLink>
          </li>
          <li>
          <a href="#about-us">About Us</a>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
      <div>{`Copyright © RMZNA ${year}`}</div>
    </footer>
  );
};

export default Footer;
