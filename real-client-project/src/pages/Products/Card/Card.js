import {React , useState , useEffect} from 'react'
import "./Card.css"
import { FaCartPlus } from "react-icons/fa";


const Card = (props) => {
    const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="container">
<div className="header-card">           
        <div  className="transparent-div" onClick={() => props.show(true , props.id)}></div>
        <img src={props.image} alt="product-card" />
        <FaCartPlus
          className="add-button"
          onClick={() => props.addProducts(props.id)}
        />
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