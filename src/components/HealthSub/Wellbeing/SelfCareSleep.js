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
import CompIcon from '../images/computer.png'
import Sleep from '../images/sleep.png'

function SelfCareSleep() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Health and Self Care </p>
        <p className="bottom-text">Tips for getting a better night sleep</p>
      </div>


      <div className="div-three">
        <p className="white-text-large">Getting a sufficient amount of quality sleep is a cornerstone of good health. Learning
ways to improve sleep and developing a better understanding of circadian rhythms are
important ways to help to optimize sleep quality.</p>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={CompIcon} alt="Your Image" />
          <p className="black-text-title ">Internet Resources</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Dr Weil</p> 
          <a className="black-text-url" href="https://www.drweil.com/dr-weil-sleep-page/">Sleep: Mind, Body, Spirit</a>
          <p className="black-text-video">Reuce Stress with Music to Sleep to</p> 
          <a className="black-text-url" href="https://www.discovermagazine.com/health/can-chanting-om-reduce-stress-and-anxiety">Best Deep Sleep Music To Calm Your Mind at Night</a>
          <p className="black-text-video">Understanding Circadian Rhythms</p> 
          <a className="black-text-url" href="https://www.webmd.com/sleep-disorders/features/morning-light-better-sleep">Get Morning Light, Sleep Better at Night</a>
          <p className="black-text-video">Goop</p> 
          <a className="black-text-url" href="https://goop.com/ca-en/wellness/health/using-circadian-rhythms-to-optimize-sleep/">Using the Intelligence of Circadian Rhythms to Optimize Your Sleep</a>
          <a className="black-text-url" href="https://goop.com/ca-en/wellness/health/how-lighting-impacts-our-well-being/">How Does Indoor Lighting Impact Our Well-Being?</a>
        </div>
      </div>

      <div className="div-four">
        <img className="icon" src={Sleep} alt="Your Image" style={{ width: '100%', height: '40%' }} />
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Huberman Lab</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=NAATB55oxeQ">How to Defeat Jet lag, Shift Work - Sleeplessness</a>
        </div>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={AppIcon} alt="Your Image" />
          <p className="black-text-title ">Apps & Technology</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>CBC</p> 
          <a className="black-text-url" href="https://www.cbc.ca/life/wellness/we-tried-9-sleep-apps-1.6527551">We tried 9 sleep apps so you don't ... (zzz)</a>
          <p className="black-text-video" >Professional Associations</p> 
          <a className="black-text-url" href="https://www.thensf.org/">National Sleep Foundation</a>
        </div>
    </div>

  </div>
  );
}

export default SelfCareSleep;
