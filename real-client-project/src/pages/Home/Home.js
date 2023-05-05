
import React, { useState , useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import image1 from "../../images/image1.jpg";
import image7 from "../../images/image2.jpg";
import image14 from "../../images/image3.jpg";
import Training from "./training.js";
import About from "./about.js";
import Card from "../Products/Card/Card";
import axios from 'axios'


function HomePage() {
  const [productData, setProductData] = useState([])

  const getProducts = async() => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/product?limit=3`)
      console.log(response)
      setProductData(response.data.items)
    }catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProducts()
  },[])

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const productResponsive = {
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    }


    return (
      <div className="home">
        <Carousel
          className="carousel"
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={5000}
          swipeable={true}
        >
          <div className="carousel__item">
            
            <img
              src={image1}
              alt="Skin Care Product"
              className="carousel__image"
              width='100%'
              height= '100%'
              />
              <div className="carousel-title">
              <p>RMZNA - Your Best Choice</p>
              </div>
           
          </div>
          <div className="carousel__item">
            
            <img
              src={image7}
              alt="Skin Care Product"
              className="carousel__image"
              width='100%'
              height= '100%'
            />
            <div className="carousel-title">
              <p>RMZNA - Your Best Choice</p>
              </div>
           
          </div>
          <div className="carousel__item">
            
            <img
              src={image14}
              alt="Skin Care Product"
              className="carousel__image"
              width='100%'
              height= '100%'
            />
            <div className="carousel-title">
              <p>RMZNA - Your Best Choice</p>
              </div>
          
          </div>
          
        </Carousel>

        <div className="home__content">
        <About />
        <div style={{background: 'var(--secondary-color)', padding: '40px 0'}}>
          <div className="home-page-product-section-heading">
            <h2>Products</h2>
          </div>
        <Carousel
  responsive={{
    desktop: {
      breakpoint: {max: 4000, min: 1024},
      items: 3,
      slidesToSlide: 1,
      paritialVisibilityGutter: 40,
    },
  
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30,
    },
  }}
  containerClass="carousel-container"
  itemClass="carousel-item"
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
>
  {productData.map((product) => (
    <Card key={product.id} image={`${process.env.REACT_APP_API_URL}${product.image}`} name={product.name} price={product.price} style={{width: '500px', marginLeft: '78px'}} />
  ))}
</Carousel>
</div>


          <Training />

         
        </div>
      
      </div>
      
    );
    
  }

  export default HomePage;

