import {React , useEffect , useState } from 'react';
import axios from "axios"
import Card from "./Card/Card"
import "./Products.css"
const Products = () => {
  const [products , setProducts] = useState([])

    useEffect( () => {
      axios
        .get(`http://localhost:6010/api/product`)
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data.items)
            console.log(response.data.items);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })

  return (
    <div className="product-container">
      <div className='search'>
        
      </div>
      <div className='products'>
                {products.map((element)=>(
                    <Card image={`${process.env.REACT_APP_IMAGESURL}${element.image}`} price={element.price}  name={element.name} description={element.description} category={element.category.name} />
                    ))}
      </div>
      <div className='paggination'>

      </div>
    </div>
  );
}

export default Products;
