import React from 'react';
import './Physical.css';
import banner from "../../images/professional-practice-banner.jpg"

function Phsyical() {
  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header-physical">
        <h3 className="sub-header-text">The demanding and physically challenging nature of healthcare work can take a toll on our bodies. Your physical health matters, and by seeking support, you can continue to provide excpetional care.</h3>
      </div>

      <div className="sub-header-two">
        <h3 className="sub-header-text-two">Explore our Physical Health resources page, and remember to prioritize your well-being</h3>
      </div>
      
      <div className="column-outer">

        <div className="column-inner">
          <div className="section-block">
            <p>Techniques for managing physical pain and discomfort in caregiving roles</p>
            <button className="section-block-button-two">Click Here</button>
          </div>

          <div className="section-block">
            <p>Preventing caregiver-related injuries and promoting safe caregiving practices</p>
            <button className="section-block-button-one">Click Here</button>
          </div>
        </div>

        <div className="column-inner">
          <div className="section-block">
            <p>Strategies for managing physical exhaustion and promoting self-renewal</p>
            <button className="section-block-button-one">Click Here</button>
          </div>

          <div className="section-block">
            <p>The role of physical activity in stress reduction and managing caregiver fatigue</p>
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

export default Phsyical;