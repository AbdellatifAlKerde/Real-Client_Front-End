import { React, useEffect, useState } from "react";
import axios from "axios";
import CardOrder from "./CardOrder/CardOrder";
import { FaRegTimesCircle } from "react-icons/fa";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import "./Order.css";
const Order = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [triggerFetchData, setTriggerFetchData] = useState(false);
  const [productsOrder, setProductsOrder] = useState([]);
  const [stringOrder, setStringOrder] = useState("");
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    setStringOrder(localStorage.products);
  }, []);

  useEffect(() => {
    setProductsOrder(stringOrder.split(","));
  }, [stringOrder]);

  useEffect(() => {
    const fetchData = async () => {
      const addProducts = [];
      for (let i = 0; i < productsOrder.length; i++) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}product/${productsOrder[i]}`
          );
          addProducts.push(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      setCartProducts(addProducts);
    };
    fetchData();
    setTriggerFetchData(false);
  }, [productsOrder, triggerFetchData]);

  const handleRemoveProduct = (element) => {
    for (let i = 0; i < productsOrder.length; i++) {
      if (productsOrder[i] === element) {
        productsOrder.splice(i, 1);
        // console.log(productsOrder);
      }
    }
    localStorage.setItem("products", productsOrder);
    setTriggerFetchData(true);
  };

  // const addOrder = async() => {
  //   try{
  //     const user = "id_user";
  //     const products =["products"];

  //     const response = await axios.post(`${process.env.REACT_APP_API_URL}order`, {
  //       user,
  //       products
  //     })

  //   }catch(error){
  //     console.error(error.message);
  //   }

  // }

  return (
    <div>
      <Header />
      <div className="main-order">
        <div className="order">
          {cartProducts.map((element) => (
            <CardOrder
              key={element._id}
              cartData={element}
              removeProduct={handleRemoveProduct}
              idProduct={element._id}
            />
          ))}
          <div className="div-confirme">
            <div className="confirme">Confirm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
