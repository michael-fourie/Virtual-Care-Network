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
        <h3 className="sub-header-text">Supporting Preventative Health Strategies</h3>
      </div>

      <div className="sub-header-two">
        <h3 className="sub-header-text-two">Home Healthcare workers balance many responsibilities. From eating and drinking on the run, to sleep disruptions caused by shift work they risk developing habits that can jeopardize their health. They are also at high risk of workplace injury and back pain due to the repetitive, physical nature of their work and the unpredictability of home care settings. </h3>
      </div>
      
      <Link className='flex-link' to='/information'>
              <button className="learn-button">Learn More and Disclaimer</button>
      </Link>
      
      <div className="column-outer">
        <div className="column-inner">
          <div className="section-block">
            <p>Managing Back Pain</p>
            <Link to='/back-pain'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p>Strategies to manage pain and injury</p>
            <Link to='/pain-injury'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>

        <div className='column-inner'> 
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

          <div className='column-inner'> 
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

            <div className="section-block">
            <p>Self Care tips for a good night sleep</p>
            <Link to='/self-care-sleep'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
</div>

        <div className="column-inner">
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
