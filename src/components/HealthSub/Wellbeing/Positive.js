import React from 'react';
import './Joy.css';
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
import Computer from '../images/computer.png'
import Gut from '../images/positive.png'

function Positive() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Discovering The Power of Belief and Postive Thinking </p>
        <p className="bottom-text">“Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers, you cannot be successful or happy.”  

Norman Vincent Peale</p>
      </div>


      <div className="div-three">
        <p className="white-text-large">
        

Evolving research on the brain and the power of belief can help Home Healthcare Workers better adapt and grow personally, professionally, and spiritually. 



Brain function and its role in rewiring the way we think, learn, break habits,  and respond to stress will be explored in this post
        </p>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={Computer} alt="Your Image" />
          <p className="black-text-title ">Internet Resources</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>BBC</p> 
          <a className="black-text-url" href="https://www.bbc.com/future/article/20230912-how-i-hacked-my-brain">How I Rewired my Brain in Six Weeks</a>
          </div>
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Dr. Joe Dispenza</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=La9oLLoI5Rc">How To BRAINWASH Yourself For Success & Destroy Negative Thoughts </a>
          <p className="black-text-video">Dr Lara Boyd</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=LNHBMFCzznE">Ted Talk: Brain Neuroplasticity: After Watching This Your Brain Will Not Be the Same</a>
          <p className="black-text-video">Bruce Lipton</p> 
          <a className="black-text-url" href="https://www.brucelipton.com/mind-body-spirit-connection/">Mind -Body- Spirit Connection </a>
        
        </div>
      </div>

  </div>
  );
}

export default Positive;
