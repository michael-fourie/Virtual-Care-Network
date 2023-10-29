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

function SelfCareGut() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Health and Self Care </p>
        <p className="bottom-text">Tips for maintianing a healthy gut biome</p>
      </div>


      <div className="div-three">
        <p className="white-text-large">The benefits of building the gut micro biome is a widely discussed topic among health
experts. This collection of microorganisms such as bacteria, fungi and viruses not only
aid digestion, but are associated with numerous health benefits including improved
immune function, mental health and control of type 2 diabetes.</p>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Internet Resources</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Huberman Lab</p> 
          <a className="black-text-url" href="https://www.eatingwell.com/article/283531/top-fiber-rich-foods-for-good-gut-bacteria/">12 Fibre-Rich Foods to Help with Good Gut Bacteria</a>
          <p className="black-text-video">Eating Well Magazine</p> 
          <a className="black-text-url" href="https://www.eatingwell.com/article/8069209/easy-food-swaps-for-gut-health-according-to-gastroenterologist/">4 Easy Food Swaps to Help Improve Your Gut Health, According to a Gastroenterologist</a>
          <p className="black-text-video">Health-line</p> 
          <a className="black-text-url" href="https://www.healthline.com/nutrition/gut-microbiome-and-health">How Does Your Gut Micro-biome Impact Your Overall Health?</a>
        </div>
      </div>

      <div className="div-four">
        <img className="icon" src={FullBanner} alt="Your Image" style={{ width: '100%', height: '40%' }} />
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Ted Talks</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=B9RruLkAUm8">Your Gut Micro-biome: The Most Important Organ You’ve Never Heard Of Erika Ebbel Angle</a>
          <p className="black-text-video">Eating Right for your Gut</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=1sISguPDlhY">How the Food You Eat Affects Your Gut</a>
        </div>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}> Dr Peter Attia</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=qqc0iEIPp8w">The Gut Brain Connection</a>
          <p className="black-text-video">Huberman Lab</p> 
          <a className="black-text-url" href="https://podcastnotes.org/huberman-lab/episode-61-how-to-enhance-your-gut-microbiome-for-brain-overall-health-huberman-lab/">How To Enhance Your Gut Micro-biome For Brain - Overall Health</a>
          <p className="black-text-video">How the Micro-biome Affects Your Health and Ways to Optimize it</p> 
          <a className="black-text-url" href="https://theproof.com/how-the-microbiome-affects-your-health-and-ways-to-optimise-it-with-drs-erica-justin-sonnenburg/">Erica Sonnenburg and Justin Sonnenburg</a>
        </div>
      </div>

  </div>
  );
}

export default SelfCareGut;
