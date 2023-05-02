import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import image1 from "../../images/image1.jpg";
import image7 from "../../images/image2.jpg";
import image14 from "../../images/image3.jpg";
import Training from "./training.js";
import About from "./about.js";


export default class Home extends Component {
  render() {
  

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
          <Training />

         
        </div>
      
      </div>
      
    );
    
  }
}
