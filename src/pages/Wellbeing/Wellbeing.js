import React from 'react';
import './Wellbeing.css';
import banner from "../../images/wellbeing-banner.jpg"
import { Link } from 'react-router-dom'

function Wellbeing() {
  const handleClick = () => {
    window.location.assign('https://carecooperatives91459d8a78.wpcomstaging.com/');
  };

  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header-wellbeing">
        <h3 className="sub-header-text">Home Healthcare Workers face many challenges in their day-to-day roles. These range from bravely walking into the homes of people they don't know, to managing emotionally and physically draining situations. </h3>
      </div>
      <Link className='flex-link' to='/information'>
              <button className="learn-button">Learn More and Disclaimer</button>
      </Link>
      
      <div className="column-outer">

        <div className="column-inner">
          
          <div className="section-block">
            <p className='section-text'>Building Emotional Resilience</p>
            <Link to='/health-resilience'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p className='section-text'>Managing Distress and Grief over Death</p>
            <Link to='/manage-distress'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>

        <div className="column-inner">
        <div className="section-block">
            <p className='section-text'>Relaxation Techniques</p>
            <Link to='/relaxation'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
        </div>
        <div className="section-block">
            <p className='section-text'>Finding Joy at Work</p>
            <Link to='/joy'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>
        <div className="column-inner">
          

          <div className="section-block">
            <p className='section-text'>Power of Positive Thinking</p>
            <Link to='/positive'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
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

export default Wellbeing;