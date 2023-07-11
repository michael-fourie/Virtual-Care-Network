import React from 'react';
import './Wellbeing.css';
import banner from "../../images/mental-health-banner.jpg"

function Wellbeing() {
  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header">
        <h3 className="sub-header-text">The demanding and emotionally challenging nature of healthcare work can take a toll on mental health, but remember that you are not alone. Your mental health matters, and by seeking support and implementing healthy coping strategies, you can continue to provide exceptional care while maintaining your own emotional well being.</h3>
      </div>

      <div className="sub-header-two">
        <h3 className="sub-header-text-two">Explore our Mental Health resources page, and remember to prioritize your mental wellbeing</h3>
      </div>
      
      <div className="column-outer">

        <div className="column-inner">
          <div className="section-block">
            <p>Recognizing and addressing signs of caregiver depression and anxiety</p>
            <button className="section-block-button-two">Click Here</button>
          </div>

          <div className="section-block">
            <p>Strategies for preventing caregiver fatigue and exhaustion</p>
            <button className="section-block-button-one">Click Here</button>
          </div>
        </div>

        <div className="column-inner">
          <div className="section-block">
            <p>Toolkits for dealing with ethical dilemmas and moral distress in healthcare settings</p>
            <button className="section-block-button-one">Click Here</button>
          </div>

          <div className="section-block">
            <p>Emotional resilience and coping mechanisms for healthcare givers</p>
            <button className="section-block-button-two">Click Here</button>
          </div>
        </div>
        <div className="column-inner">
          <div className="section-block">
            <p>Reach out, share expereinces, and connect with others on our peer support forum</p>
            <button className="section-block-button-one">Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wellbeing;