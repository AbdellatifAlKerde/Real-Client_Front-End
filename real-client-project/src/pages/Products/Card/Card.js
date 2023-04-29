import React from 'react'
import "./Card.css"
import { FaCartPlus } from "react-icons/fa";

const Card = (props) => {



  return (
    <div className="container">
      <div className="header-card">
        <img src={props.image} alt="product-card" />
        <FaCartPlus className="add-button" />
      </div>
      <div className="body-card">
        <div className="info-card">
          <h3>{props.name}</h3>
          <h4>{props.price}$</h4>
        </div>
      </div>
    </div>
  );
}

export default Card