import React from 'react';
import './Physical.css';
import banner from "../../images/professional-practice-banner.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom';
function Phsyical() {
  const handleClick = () => {
    window.location.assign('https://carecooperatives91459d8a78.wpcomstaging.com/');
  };

  return (
    <div className="container">
      
      <div className="image-container">
        <img src={banner} alt="Image" />
      </div>

      <div className="sub-header-physical">
        <h3 className="sub-header-text">Supporting Professional Practice</h3>
      </div>
      <Link className='flex-link' to='/information'>
              <button className="learn-button">Learn More and Disclaimer</button>
      </Link>
      
      <div className="column-outer">

        <div className="column-inner">
          <div className="section-block">
            <p className='section-text'>Improving communication skills for effective communication</p>
            <Link to='/communication'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p className='section-text'>Elder Abuse</p>
            <Link to='/morals'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>
        </div>

        <div className="column-inner">
          <div className="section-block">
            <p className='section-text'>Care Considerations for Older Adults</p>
            <Link to='/elder-care'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

          <div className="section-block">
            <p className='section-text'>Professional Development Resources</p>
            <Link to='/professional-developmet'>
              <button className="section-block-button-two">Click Here</button>
            </Link>
          </div>

        </div>
        <div className="section-block">
            <p className='section-text'>Reach out, share expereinces, and connect with others on our peer support forum</p>
            <div>
              <button onClick={handleClick} className="section-block-button-two">Click Here</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Phsyical;