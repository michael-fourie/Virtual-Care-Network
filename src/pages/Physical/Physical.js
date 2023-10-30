import React from 'react';
import './Physical.css';
import banner from "../../images/professional-practice-banner.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom';
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
            <p>Improving communication skills for effective communication</p>
            <Link to='/communication'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p>Managing the Ethical Dilemma of Elder Abuse</p>
            <Link to='/morals'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>

        <div className="column-inner">
          <div className="section-block">
            <p>Managing the Emotional Distress and Grief over Death and Dying</p>
            <Link to='/manage-distress'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
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

export default Phsyical;