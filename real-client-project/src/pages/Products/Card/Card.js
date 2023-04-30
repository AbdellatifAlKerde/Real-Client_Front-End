import {React , useState} from 'react'
import "./Card.css"
import { FaCartPlus } from "react-icons/fa";

const Card = (props) => {
const [addProduct , setAddProduct] = useState([]);

const handelAddProduct = (element) => {
  setAddProduct(...addProduct ,element)
}
// console.log(addProduct)
  return (
    <div className="container">
      <div className="header-card">
        <img src={props.image} alt="product-card" />
        <FaCartPlus className="add-button" onClick={() => {handelAddProduct(props.key)}} />
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