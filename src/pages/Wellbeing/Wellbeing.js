import React from 'react';
import './Wellbeing.css';
import banner from "../../images/wellbeing-banner.jpg"
import { Link } from 'react-router-dom'

function Wellbeing() {
  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header-wellbeing">
        <h3 className="sub-header-text">Your well-being is important, and be seeking support, you can sustain the ability to provide exceptional care.</h3>
      </div>

      <div className="sub-header-two">
        <h3 className="sub-header-text-two">Explore our Well-being resources page, and remember to prioritize your mental and physical health.</h3>
      </div>
      
      <div className="column-outer">

        <div className="column-inner">
          <div className="section-block">
            <p>Self Care tips for a good night sleep</p>
            <Link to='/self-care-sleep'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p>Emotional resilience and coping mechanisms for health caregivers</p>
            <Link to='/health-resilience'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>

        <div className="column-inner">
          <div className="section-block">
            <p>Self Care tips for Fasting </p>
            <Link to='/self-care-fasting'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p>Fast, Easy, Healthy Eating Tips and Recipes</p>
            <Link to='/self-care-recipe'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
          
        </div>
        <div className="column-inner">
          <div className="section-block">
            <p>Self Care tips for Hydration</p>
            <Link to='/self-care-hydration'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p>Microbiome Gut Health</p>
            <Link to='/self-care-gut'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
          
        </div>
        <div className="section-block">
            <p>Reach out, share expereinces, and connect with others on our peer support forum</p>
            <button className="section-block-button-two">Click Here</button>
          </div>
      </div>
    </div>
  );
}

export default Wellbeing;