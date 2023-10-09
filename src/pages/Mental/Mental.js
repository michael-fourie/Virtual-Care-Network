import React from 'react';
import './Mental.css';
import banner from "../../images/health-banner.jpg"
import { Link } from 'react-router-dom'

function Mental() {
  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header-mental">
        <h3 className="sub-header-text">The demanding and emotionally challenging nature of healthcare work can take a toll on mental health, but remember that you are not alone. Your mental health matters, and by seeking support and implementing healthy coping strategies, you can continue to provide exceptional care while maintaining your own emotional well being.</h3>
      </div>

      <div className="sub-header-two">
        <h3 className="sub-header-text-two">Explore our Mental Health resources page, and remember to prioritize your mental well-being</h3>
      </div>
      
      <div className="column-outer">

        <div className="column-inner">
          <div className="section-block">
            <p>Preventing workplace injury</p>
            <button className="section-block-button-two">Click Here</button>
          </div>

          <div className="section-block">
            <p>Strategies to manage pain and injury</p>
            <Link to='/pain-injury'>
              <button className="section-block-button-one">Click Here</button>
            </Link>
          </div>
        </div>

        <div className="column-inner">
          <div className="section-block">
            <p>Coping skills to manage stress and prevent caregiver fatigue</p>
            <button className="section-block-button-one">Click Here</button>
          </div>

          <div className="section-block">
            <p>Reach out, share expereinces, and connect with others on our peer support forum</p>
            <button className="section-block-button-two">Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mental;
