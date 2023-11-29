import React from 'react';
import './Mental.css';
import banner from "../../images/health-banner.jpg"
import { Link } from 'react-router-dom'

function Mental() {
  const handleClick = () => {
    window.location.assign('https://carecooperatives91459d8a78.wpcomstaging.com/');
  };


  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header-mental">
        <h3 className="sub-header-text">Supporting Preventative Health Strategies</h3>
      </div>
      <Link className='flex-link' to='/information'>
              <button className="learn-button">Learn More and Disclaimer</button>
      </Link>
      
      <div className="column-outer">
        <div className="column-inner">
          <div className="section-block">
            <p className='section-text'>Managing Back Pain</p>
            <Link to='/back-pain'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p className='section-text'>Strategies to manage pain and injury</p>
            <Link to='/pain-injury'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>

        <div className='column-inner'> 
          <div className="section-block">
              <p className='section-text'>Self Care tips for Hydration</p>
              <Link to='/self-care-hydration'>
                <button className="section-block-button-two">Click Here</button>
              </Link>
            </div>

            <div className="section-block">
              <p className='section-text'>Microbiome Gut Health</p>
              <Link to='/self-care-gut'>
                <button className="section-block-button-two">Click Here</button>
              </Link>
            </div>

          </div>

          <div className='column-inner'> 
          <div className="section-block">
              <p className='section-text'>Self Care tips for Fasting </p>
              <Link to='/self-care-fasting'>
                <button className="section-block-button-two">Click Here</button>
              </Link>
            </div>

            <div className="section-block">
              <p className='section-text'>Fast, Easy, Healthy Eating Tips and Recipes</p>
              <Link to='/self-care-recipe'>
                <button className="section-block-button-two">Click Here</button>
              </Link>
            </div>

            <div className="section-block">
            <p className='section-text'>Self Care tips for a good night sleep</p>
            <Link to='/self-care-sleep'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
</div>

        <div className="column-inner">
          <div className="section-block">
            <p className='section-text'>Reach out, share expereinces, and connect with others on our peer support forum</p>
            <div>
              <button onClick={handleClick} className="section-block-button-two">Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mental;
