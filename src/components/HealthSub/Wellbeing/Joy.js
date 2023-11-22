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
import Gut from '../images/joy.jpg'

function Joy() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Finding JOY in Work </p>
        <p className="bottom-text">“Joy is a net of love by which you can catch souls.”

—Mother Teresa</p>
      </div>


      <div className="div-three">
        <p className="white-text-large">
        A 2023 Surgeon General report found toxic work environments potentially threaten health as much as misusing nicotine, alcohol, or drugs.  



The independent nature of home healthcare workers' jobs and their ever-changing workplace settings mean they would benefit from strategies and resources to help them bring joy to work.
        </p>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={Computer} alt="Your Image" />
          <p className="black-text-title ">Internet Resources</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>PBS News</p> 
          <a className="black-text-url" href="https://www.pbs.org/newshour/economy/column-happiness-not-endless-sacrifice-drives-success-work">Happiness, not Endless Sacrifice, Drives Success at Work</a>
          <p className="black-text-video">CNBC</p> 
          <a className="black-text-url" href="https://www.cnbc.com/2018/09/24/stuck-in-a-rut-find-your-joy-at-work-with-these-3-strategies.html">Find Joy at Work with These Three Strategies</a>
          </div>
      </div>

      <div className="div-four">
        <img className="icon" src={Gut} alt="Your Image" style={{ width: '100%', height: '40%' }} />
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Annie McKee (author)</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=LlAJoHk_hf8">Being Happy at Work Matters </a>
          <p className="black-text-video">Dr. Brene Brown</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=2IjSHUc7TXM">Joy and Gratitude</a>
        </div>
      </div>

  </div>
  );
}

export default Joy;
