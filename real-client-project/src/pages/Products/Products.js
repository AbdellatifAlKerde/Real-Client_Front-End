
import {React , useEffect , useState } from 'react';
import axios from "axios"
import Card from "./Card/Card"
import {FaChevronRight} from "react-icons/fa"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./Products.css"

const Products = () => {
  const [products , setProducts] = useState([]);
  const [numberPages , setNumberPages] = useState([]);
  const [page , setPage] =useState(1) ;
  const [totalPages , setTotalPages] = useState(1);
  const [byeProducts , setbyeProducts] = useState([]);
  
  const countNUmberPages = (element) => {
    const e = parseInt(element);
    const pages=[];
    
    for (let i = 0; i < e; i++) {
      pages.push(i+1);
    }
    setNumberPages(pages);
  }
  
  useEffect( () => {
    const fetchData = () => {
    axios
    .get(`http://localhost:5010/api/product?page=${page}`)
    .then((response) => {
      if (response.status === 200) {
        setProducts(response.data.items);
        countNUmberPages(response.data.totalPages)
        setTotalPages(response.data.totalPages);
        console.log(response.data.items);
        console.log(page)
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };
  fetchData()
  }, [page])



const handelPageChange = (element) => {
  setPage(element);
};
const handelPlus = () => {
  setPage(page + 1)
}

return (
  <div className='hool-product-page'>
     <Header className="fixed" />
  <div className="product-container"> 

      <div className="search"></div>
      <div className="products">
        {products.map((element) => (
          <Card
            image={`${process.env.REACT_APP_API_URL}${element.image}`}
            price={element.price}
            name={element.name}
            description={element.description}
            category={element.category.name}
            key={element._id}
          />
        ))}
      </div>
      <div className="paggination">
        {numberPages.map((element) => (
          <div className="number-page" key={element} onClick={() => {handelPageChange(element)}}>{element}</div>
        ))}
        {!(totalPages === page) ?<FaChevronRight className='next-button' onClick={() => {handelPlus(page)}} />:null}
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Products;
