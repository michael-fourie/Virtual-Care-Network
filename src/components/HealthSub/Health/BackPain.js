import React from 'react';
import './PainInjury.css';
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
import Health from '../images/backpain.svg'

function BackPain() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Managing Back Pain</p>
        <p className="bottom-text">“It's not whether you get knocked down. It’s whether you get up again.” Vince Lombardi</p>
      </div>

      <div className="div-two">
        <div className="flex-row">
          <img className="icon" src={BookIcon} alt="Your Image" />
          <p className="black-text-title">Studies find back pain is the most common disorder among home healthcare workers. </p>
        </div>

        <div className="normal-div">
          <p className="black-text-sub"> Injuries can happen from heavy lifting, bending, reaching in awkward ways when handling clients, and even from prolonged sitting in the car while commuting between bookings. Learning targeted stretches and exercises and measures to take immediately after a suspected back injury may help reduce the risk of damage</p>
        </div>
      </div>
      <div className="div-five">
        <div className="flex-column">
          <div className="flex-row-left-margin">
            <img className="icon" src={FactIcon} alt="Your Image" />
            <p className="black-text">Fact: Chronic pain over a prolonged period may shrink the brain. Researchers found that the brain of those with chronic back pain is 11% smaller than the average brain. It is suspected that this is because living with chronic pain is stressful and can take a toll on the brain.</p>
          </div>
        </div>
      </div>

      <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={WebsiteIcon} alt="Your Image" />
          <p className="white-text-title ">Online Resources</p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>
Easy to Remember Acronyms of Steps to Take Post-Injury to Aid Healing and Reduce Harm.</p> 
          <a className="white-text-url" href="https://www.healthline.com/health/muscle-strain-treatment">R.I.C.E / P.E.A.C.E / L.O.V.E </a>
          <a className="white-text-url" href="https://www.lifemark.ca/blog-post/treating-acute-injury-go-meat-over-rice">M.E.A.T</a>
        </div>
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>c Mike Evans in collaboration with the Centre for Effective Practice and the Institute for Work & Health</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=BOjTegn9RuY">Low Back Pain</a>
          <p className="black-text-video">National Health Service UK</p> 
          <a className="black-text-url" href="https://www.nhs.uk/conditions/nhs-fitness-studio/chronic-back-pain-pilates-exercise-video/">Back Pain Pilates Video Workout</a>
          <p className="black-text-video">Dr. Rachel Zoffness</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=3Mn9QMTmRDM">The Truth About Managing Chronic Pain </a>        
          <p className="black-text-video">British Columbia Chiropractic Association</p> 
          <a className="black-text-url" href="https://www.bcchiro.com/chiropractic-you/chiropractic-exercise-videos/">Exercise Videos for Neck and Back Pain</a>
        </div>
      </div>


      <div className="div-seven">
        <div className="flex-row">
          <img className="icon" src={SearchIcon} alt="Your Image" />
          <p className="white-text-title">ToolKits</p>
        </div>
        <div className="flex-row">
          <div className="flex-column-mobile">
            <p className="white-text-title">American Academy of Sports Medicine</p>
            <a className="white-text-url" href="https://www.acsm.org/docs/default-source/files-for-resource-library/a-road-map-to-effective-muscle-recovery.pdf?sfvrsn=a4f24f46_2">A Road Map to Effective Muscle Recovery</a>
          </div>
          <div className="flex-column-mobile">
            <p className="white-text-title">Institute for Health and Work</p>
            <a className="white-text-url" href="https://www.iwh.on.ca/tools-and-guides/so-your-back-hurts">So Your Back Hurts</a>
          </div>
        </div>
        <div className="flex-column-mobile">
            <p className="white-text-title">Dr Racheal Zoffness</p>
            <a className="white-text-url" href="https://www.zoffness.com/resources">A Global Pain Expert’s Resource Page</a>
        </div>
      </div>

      
      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Dr. Andrew Huberman</p> 
          <a className="black-text-url" href="https://hubermanlab.com/control-pain-and-heal-faster-with-your-brain/">Control Pain & Heal Faster with Your Brain</a>
          <p className="black-text-video">TED Audio</p> 
          <a className="black-text-url" href="hhttps://www.ted.com/talks/jen_gunter_5_things_you_should_know_about_back_pain?language=en">Dr. Jen Gunter: 5 Things You Should Know About Back Pain</a>
        </div>
      </div>

      <div className="div-ten">
        <div className="flex-row">
          <img className="icon" src={ListIcon} alt="Your Image" />
          <p className="white-text-title ">Professional Standards and Guidelines </p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>RNAO</p> 
          <a className="white-text-url" href="https://rnao.ca/bpg/guidelines/workplace-health-safety-and-well-being-nurse">Workplace Health, Safety and Well-being of the Nurse</a>
         </div>
      </div>

   
       

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={AppIcon} alt="Your Image" />
          <p className="black-text-title ">Apps & Technology</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>HealthCentral</p> 
          <a className="black-text-url" href="https://www.healthcentral.com/condition/back-pain/best-back-pain-apps">Find the Best Back Pain App for You</a>

          <p className="black-text-video">Rachel Zoffness</p> 
          <a className="black-text-url" href="https://www.jordanharbinger.com/rachel-zoffness-managing-pain-in-your-body-and-brain/">Managing Pain In Your Body and Brain</a>
          
          <p className="black-text-video">BC Chiropractor Association</p> 
          <a className="black-text-url" href="www.bcchiro.com/chiropractic-you/straighten-up-Canada-free-app/">Straighten Up Canada App to Reduce Back Injury and Pain </a>
        </div>
    </div>
  </div>
  );
}

export default BackPain;
