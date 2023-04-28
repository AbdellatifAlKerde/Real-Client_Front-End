import {React , useState } from 'react';
import logo from "../../images/logo-for-web.png";
import { NavLink} from "react-router-dom";
import {
  FaCartPlus,
  FaShoppingCart,
  FaAlignJustify,
  FaAlignCenter,
} from "react-icons/fa";
import "../header/header.css";

const HeaderPage = () =>  {
   const [open , setOpen] = useState(false)
 

    const handelMenuShow = () => {
        console.log("hassan")
        setOpen(true);
    }

        const handelMenuHidden = () => {
          console.log("hassan");
          setOpen(false);
        };

  return (
    <div className="wrapp">
      <div className="left-space"></div>
      <div className="logo-search">
        <img className="header-logo" src={logo} width="2rem" height="2rem" />
        <input className="search-bare" placeholder="search..."></input>
      </div>

      <ul className="list">
        <li>
          <NavLink className="link" to="/" href="#hero">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact" href="#hero">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/products" href="#hero">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/training" href="#hero">
            Training
          </NavLink>
        </li>
      </ul>
      <div className="center-space"></div>
      <div className="cart">
        <FaShoppingCart />
      </div>
      {!open ? (
        <div className="toggle_btn">
          <FaAlignJustify onClick={handelMenuShow} />
        </div>
      ) : (
        <div className="toggle_btn">
          <FaAlignCenter onClick={handelMenuHidden} />
        </div>
      )}
      {open ? (
        <div className="dropdown_menu">
          <li>
            <NavLink
              className="link"
              to="/"
              href="#hero"
              onClick={handelMenuHidden}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/contact"
              href="#hero"
              onClick={handelMenuHidden}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/products"
              href="#hero"
              onClick={handelMenuHidden}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/training"
              href="#hero"
              onClick={handelMenuHidden}
            >
              Training
            </NavLink>
          </li>
        </div>
      ) : null}
      <div className="right-space"></div>
    </div>
  );
}
export default HeaderPage;
