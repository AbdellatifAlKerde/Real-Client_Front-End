import { React, useState, useEffect } from "react";
import axios from "axios";
import logo from "../../images/logo-for-web.png";
import { NavLink } from "react-router-dom";
import {
  FaSearchengin,
  FaCartPlus,
  FaShoppingCart,
  FaAlignJustify,
  FaAlignCenter,
} from "react-icons/fa";
import "../header/header.css";

const HeaderPage = (props) => {
  const [open, setOpen] = useState(false);
  const [findProducts, setFindProducts] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [dataAllProducts, setDataAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  let activeStyle = {
    borderBottom: "3px solid var(--accent-color)",
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleButtonClick = () => {
    for (let i = 0; i < dataAllProducts.length; i++) {
      if (inputValue.toLowerCase() === dataAllProducts[i].name.toLowerCase()) {
        localStorage.setItem("idProduct", dataAllProducts[i].id);
      }
    }
  };

  useEffect(() => {
    if (localStorage.products !== "") {
      setFindProducts(true);
    }
  });
  const handelMenuShow = () => {
    setOpen(true);
  };

  const handelMenuHidden = () => {
    setOpen(false);
  };

  // const handleOpenOrder = () => {
  //   setFindProducts(false);
  // }

  //// fetching the all products
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}product`).then((response) => {
      setAllProducts(response.data);
      setTotalPages(response.data.totalPages);
    });
  }, []);

  // console.log(allProducts);
  // console.log(totalPages);
  const HandleGetNameProducts = async () => {
    const allProducts = [];
    for (let i = 1; i <= totalPages; i++) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}product?page=${i}`
        );
        if (response.status === 200) {
          const data = response.data.items;
          if (data) {
            for (let y = 0; y < data.length; y++) {
              allProducts.push({ name: data[y].name, id: data[y]._id });
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    // allProducts array now contains all items with the specific category
    setDataAllProducts(allProducts);
  };

  console.log(dataAllProducts);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`holl-header ${isScrolled ? "shadow" : ""}`}>
      <div className="wrapp">
        <div className="left-space"></div>
        <div className="logo-search">
          <img className="header-logo" src={logo} width="2rem" height="2rem" />
          <div className="search-icon_search">
            <input
              className="search-bare"
              placeholder="search..."
              onFocus={HandleGetNameProducts}
              value={inputValue}
              onChange={handleInputChange}
            ></input>
            <NavLink to="/products">
              <FaSearchengin
                className="icon-search"
                onClick={handleButtonClick}
              />
            </NavLink>
          </div>
        </div>

        <ul className="list">
          <li>
            <NavLink
              className="link"
              to="/"
              href="#hero"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="link"
              to="/products"
              href="#hero"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/training"
              href="#hero"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Training
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/contact"
              href="#hero"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="center-space"></div>
        <div className="main-cart">
          <NavLink to="/order">
            <FaShoppingCart className="cart" />
          </NavLink>
          {findProducts ? <div className="notification"></div> : null}
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
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="link"
                to="/products"
                href="#hero"
                onClick={handelMenuHidden}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Training
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/contact"
                href="#hero"
                onClick={handelMenuHidden}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
          </div>
        ) : null}
        <div className="right-space"></div>
      </div>
    </div>
  );
};
export default HeaderPage;
