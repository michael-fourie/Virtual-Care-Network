import React from 'react';
import './SelfCare.css';
import BookIcon from '../images/BookIcon.png'
import FactIcon from '../images/FactIcon.png'
import QuestionIcon from '../images/QuestionIcon.png'
import HeartIcon from '../images/HeartIcon.png'
import SearchIcon from '../images/SearchIcon.png'
import VideoIcon from '../images/VideoIcon.png'
import PodcastIcon from '../images/PodcastIcon.png'
import ListIcon from '../images/ListIcon.png'
import AppIcon from '../images/AppIcon.png'
import WebsiteIcon from '../images/WebsiteIcon.png'
import FastingIcon from '../images/FastingIcon.png'
import BloodIcon from '../images/BloodIcon.png'
import FullBanner from '../images/FullBanner.PNG'

function SelfcareHydration() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Health and Self Care </p>
        <p className="bottom-text">Maintaining Proper Hydration</p>
      </div>

      <div className="div-three">
        <p className="white-text-large">Solutions to increase fluid intake, and the merit of maintaining adequate hydration are discussed below</p>
      </div>

      <div className="div-three-alt">
        <p className="white-text-large">How much water per day? 8 oz (237 mL) of fluid per hour for the first 10 hours of your day.</p>
      </div>

      <div className="div-four">
        <img className="icon" src={FullBanner} alt="Your Image" style={{ width: '100%', height: '40%' }} />
      </div>
    <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Resources for Hydration Education</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Huberman Lab</p> 
          <a className="black-text-url" href="https://hubermanlab.com/optimize-your-water-quality-and-intake-for-health/">Optimize Your Water Quality and Intake for Health</a>
          <p className="black-text-video">EatingWell Magazine</p> 
          <a className="black-text-url" href="https://www.eatingwell.com/article/8060890/conditions-that-increase-risk-of-dehydration/#toc-the-best-ways-to-stay-hydrated">7 Conditions That Might Increase Your Risk of Dehydration, According to Health Experts (plus tips to rehydrate )</a>
          <p className="black-text-video" >Health Digest</p> 
          <a className="black-text-url" href="https://www.healthdigest.com/945446/the-unexpected-benefit-of-adding-salt-to-your-drinking-water/">The Unexpected Benefit Of Adding Salt To Your Drinking Water</a>
          <p className="black-text-video">UCLA Health</p> 
          <a className="black-text-url" href="https://www.uclahealth.org/news/15-food-that-help-you-stay-hydrated">15 Foods that Help You Stay Hydrated</a>
        </div>
      </div>
  </div>
  );
}

export default SelfcareHydration;
