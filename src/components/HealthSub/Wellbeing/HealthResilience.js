import React from 'react';
import './HealthResilience.css';
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
import Reselience from '../images/resilience.png'

function HealthResilience() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Building Emotional Resilience : Are you Surviving or Thriving?</p>
        <p className="bottom-text">“Life is not merely to be alive but to be well “ Marcus Valerius Martial</p>
      </div>

      <div className="div-two">
        <div className="flex-row">
          <img className="icon" src={BookIcon} alt="Your Image" />
          <p className="black-text-title">What is emotional resilience? </p>
        </div>

        <div className="normal-div">
          <p className="black-text-sub">Being emotionally resilient is coping with emotional hardships and working through setbacks by harnessing inner strengths, skills, and seeking support. Resilience enables us to maintain control during stressful situations. It is the ability to cope and make good choices without becoming overwhelmed. People who lack resilience are more likely to feel helpless and rely on unhealthy coping strategies such as isolation, and self-medication.</p>
        </div>
      </div>

      <div className="div-three">
        <p className="white-text-large">Home healthcare workers must bravely walk into the houses and apartments of people they don’t know. They must contend with many challenges from families in distress and clients who are unable or unwilling to welcome them. Every day they rely on mental strength and endurance to cope with the demanding, emotionally draining nature of this work. Another threat to home healthcare workers’ well-being is compassion fatigue. Compassion fatigue is when compassion for clients can become eroding and negatively impact home health workers. Without resilience and skills to manage these kinds of stressors, home healthcare workers can get caught in a vicious cycle of burnout and carrying the trauma of what their clients are going through.</p>
      </div>


      <div className="div-five">
        <div className="flex-column">
          <div className="flex-row-left-margin">
            <img className="icon" src={FactIcon} alt="Your Image" />
            <p className="black-text">Fact: Mother Teresa understood caregiver burnout and compassion fatigue. She wrote in her plan to her superiors that her nuns needed to take an entire year off from their duties every 4-5 years to allow them to heal from the effects of their caregiving work.</p>
          </div>
          <div className="flex-row-left-margin">
            <img className="icon" src={QuestionIcon} alt="Your Image" />
            <p className="black-text">What are ways to build emotional resilience to better cope? How can you identify, and remedy issues associated with physical and emotionally draining caregiving roles such as burnout and compassion fatigue? Can strategies such as practicing gratitude help build emotional resilience? </p>
          </div>
        </div>
      </div>

      <div className="div-six">
        <div className="flex-row">
          <img className="icon" src={HeartIcon} alt="Your Image" />
          <p className="black-text-title ">Here is a Guide of References and Tools to Help! </p>
        </div>
        <div className="full-width">
          <p className="black-text-left">Magazine Articles and Web Sources</p> 

          <p className="black-text-left">Psychology Today:</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://www.psychologytoday.com/us/blog/design-your-path/201305/10-traits-emotionally-resilient-people">Part 1: 10 Traits of Emotionally Resilient People</a>
            <a className="black-text-url" href="https://www.psychologytoday.com/us/blog/design-your-path/201305/25-ways-boost-resilience">Part 2: 25 Ways to Boost Resilience</a> 
            <a className="black-text-url" href="https://www.nursingworld.org/~4ab553/globalassets/covid19/well-being-initiative_sharegraphic_checklist_-091720a.pdf">After Work Checklist to Decompress</a>
          </div>
        </div>
      </div>

      <div className="div-seven">
        <div className="flex-row">
          <img className="icon" src={SearchIcon} alt="Your Image" />
          <p className="white-text-title">ToolKits to Identify and Manage Burnout and Compassion Fatigue</p>
        </div>
        <div className="flex-row">
          <div className="flex-column-mobile">
            <p className="white-text-title">What's your Professional Quality of Life?</p>
            <p className="white-text">Are you at risk of compassion fatigue and burnout? Take ProQOL’s test to find out:</p>
            <a className="white-text-url" href="https://survey.alchemer.com/s3/6499999/ProQOL-Health">ProQOL’s Test</a>
          </div>
          <div className="flex-column-mobile">
            <p className="white-text-title">Supportive Resources</p>
            <a className="white-text-url" href="https://proqol.org/burnout">Burnout</a>
            <a className="white-text-url" href="https://proqol.org/compassion-fatigue">Compassion Fatigue</a>
            <a className="white-text-url" href="https://proqol.org/compassion-satisfaction">Compassion Satisfaction</a>
            <a className="white-text-url" href="https://proqol.org/boundaries">Boundaries</a>
          </div>
        </div>
        <div className="flex-column-mobile">
            <p className="white-text-title">Three Good Things:</p>
            <a className="white-text-url" href="https://www.unchealthcare.org/app/files/public/f2b5cde9-11bc-4877-98dc-74d70ade47e8/pdf-well-being-AR-3GoodThingsb_Article-Build-Resilience-and-Improve-Well-Being.pdf">A toolkit to improve your outlook to help you be a better caregiver. </a>
        </div>
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>How to Manage Compassion Fatigue in Caregiving</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=7keppA8XRas">Patricia Smith, founder of the Compassion Fatigue Awareness Project, describes how the path to wellness begins with awareness and self-care measures </a>
          <p className="black-text-video">10 Ways to Build and Develop Resilience</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=VNCL1glwyOI">Easy-to-follow format to walk you through steps to build the resilience needed to navigate life challenges </a>
          <p className="black-text-video">How to Make Stress Your Friend </p> 
          <a className="black-text-url" href="https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend?language=en">Kelly McGonigal, a Stanford University health psychologist, argues that resilience is built by looking at stress differently.</a>        
          <p className="black-text-video">How to Protect Your Brain from Stress</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=Nz9eAaXRzGg">Neurobiologist and science journalist Niki Korteweg describes the four most important things you can do to make your brain resilient to stress. </a>
        </div>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Highway to Well</p> 
          <a className="black-text-url" href="https://music.amazon.com/podcasts/24cd33cd-e8b0-4f66-b345-9530a1330784/highway-to-well-with-derek-bell?ref=dm_sh_tdnL6Vg0Nd4ma6xSuKAdWUOpY0">American Nurses Association Foundation Gratitude Project: Stories about gratitude to build resiliency and optimism, and how to navigate the challenges of life</a>
          <p className="black-text-video">A Nursing State of Min</p> 
          <a className="black-text-url" href="https://www.aorn.org/about-aorn/aorn-newsroom/ana-podcast">American OR Nurses</a>
        </div>
      </div>

      <div className="div-ten">
        <div className="flex-row">
          <img className="icon" src={ListIcon} alt="Your Image" />
          <p className="white-text-title ">Professional Standards and Guidelines </p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>College of Nurses of Ontario</p> 
          <a className="white-text-url" href="https://www.cno.org/globalassets/4-learnaboutstandardsandguidelines/prac/learn/sap/self-care-fact-sheet-en.pdf">Your health can affect the care you provide to your patients</a>
          <p className="white-text-video">The Registered Nurses Association of Ontario</p> 
          <a className="white-text-url" href="https://rnao.ca/sites/rnao-ca/files/Preventing_and_Mitigating_Nurse_Fatigue_in_Health_Care.pdf">Preventing and Mitigating Nurse Fatigue in Health</a>
        </div>
      </div>

      <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={WebsiteIcon} alt="Your Image" />
          <p className="white-text-title ">Support Organizations</p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>The Compassion Fatigue Awareness Network</p> 
          <a className="white-text-url" href="https://compassionfatigue.org/about.html">Fatigue Support Network</a>
          <p className="white-text-video">American Nurses Association</p> 
          <a className="white-text-url" href="https://www.nursingworld.org/practice-policy/work-environment/health-safety/disaster-preparedness/coronavirus/what-you-need-to-know/the-well-being-initiative/">The Well-Being Initiative </a>
        </div>
      </div>
       

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={AppIcon} alt="Your Image" />
          <p className="black-text-title ">Apps & Technology</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Tools for Healthcare Professionals to Build their Mental Health Resiliency</p> 
          <a className="black-text-url" href="https://www.getmedstaffing.com/blog/tools-healthcare-professionals-build-their-mental-health-resiliency">GetMedStaffing Tools </a>
          <p className="black-text-video">15 Top Apps for Resilience, Mental Health Promotion & Suicide Prevention</p> 
          <a className="black-text-url" href="https://www.sallyspencerthomas.com/dr-sally-speaks-blog/2017/10/8/15-top-apps-for-resilience-mental-health-promotion-suicide-prevention">Sally Spencer Thomas's List of Resources</a>
        </div>
      </div>

    </div>
  );
}

export default HealthResilience;
