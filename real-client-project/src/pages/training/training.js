import React from 'react';
import './training.css';
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

function Training() {
  return (
    <div className='training-page'>
      <h2>Training</h2>
      <div className='training-container'>
        <div className='training-item'>
          <img src={image1} alt='Training 1' />
          <div className='training-description'>
            <p>Description of training 1</p>
          </div>
        </div>
        <div className='training-item'>
          <img src={image2} alt='Training 2' />
          <div className='training-description'>
            <p>Description of training 2</p>
          </div>
        </div>
        <div className='training-item'>
          <img src={image3} alt='Training 3' />
          <div className='training-description'>
            <p>Description of training 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
