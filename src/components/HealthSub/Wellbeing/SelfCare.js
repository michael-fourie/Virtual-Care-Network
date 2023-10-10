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

function SelfCare() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Health and Self Care </p>
        <p className="bottom-text">Tips for Health Healthcare Workers</p>
      </div>

      {/* <div className="div-two">
        <div className="flex-row">
          <img className="icon" src={BookIcon} alt="Your Image" />
          <p className="black-text-title">Home Healthcare workers are busy and must balance many responsibilities in their daily lives. This can come with consequences that can negatively impact physical health. The following series of posts will focus on self-care measures to help restore balance and fortify health. This will include tips on healthy eating, easy meals and snack recipes, a review of gut health /the micro-biome, intermittent fasting, how to optimize sleep quality, understanding circadian rhythms, and how to keep properly hydrated</p>
        </div>

        <div className="normal-div">
          <p className="black-text-sub">Since everyone’s body and health needs are unique, these tips may not be suitable for all people and any changes to your health regimes require attention and the input of your physician.</p>
        </div>
      </div> */}

      <div className="div-three">
        <p className="white-text-large">Home Healthcare workers are busy and must balance many responsibilities in their daily lives. This can come with consequences that can negatively impact physical health. The following series of posts will focus on self-care measures to help restore balance and fortify health. This will include tips on healthy eating, easy meals and snack recipes, a review of gut health /the micro-biome, intermittent fasting, how to optimize sleep quality, understanding circadian rhythms, and how to keep properly hydrated</p>
      </div>

      <div className="div-three-alt">
        <p className="white-text-large">Since everyone’s body and health needs are unique, these tips may not be suitable for all people and any changes to your health regimes require attention and the input of your physician.</p>
      </div>

      <div className="div-six">
        <div className="flex-row">
          <img className="icon" src={FastingIcon} alt="Your Image" />
          <p className="black-text-title ">Intermittent Fasting</p>
        </div>
        <div className="full-width">
          <p className="black-text-left">It seems everyone is doing it ! Learn the potential benefits of intermittent fasting upon several key aspects of overall health including weight loss, reduction of inflammation, and controlling blood sugar.</p> 
          <p className="black-text-left">Internet Resources:</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://www.euronews.com/culture/2023/04/25/thinking-of-fasting-heres-everything-you-need-to-know-about-staying-healthy-and-fit-while-food">Thinking of fasting? Here's everything you need to know about keeping fit while off food</a>
            <a className="black-text-url" href="https://www.bbc.com/news/health-63134505">Eating Within Set Times Good for Shift Workers</a>
            <a className="black-text-url" href="https://longevity.technology/news/valter-longo-everybodys-fasting-but-fasting-is-just-a-word/">Advice from Fasting Pioneer Valter Longo</a>
            <a className="black-text-url" href="https://www.prevention.com/weight-loss/a20500235/intermittent-fasting/">What is intermittent Fasting, and does it help with weight loss?</a>
          </div>
        </div>
    </div>

    <div className="div-six-alt">
        <div className="flex-row">
          <img className="icon" src={BloodIcon} alt="Your Image" />
          <p className="black-text-title ">Information Regarding Type 2 Diabetes</p>
        </div>
        <div className="full-width">
        <p className="black-text-left">For Intermittent Fasting</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://www.medicalnewstoday.com/articles/intermittent-fasting-type-2-diabetes">Type 2 diabetes</a>
            <a className="black-text-url" href="https://www.uclahealth.org/news/metabolic-disease-dr-rajat-singh">Decoding the mysteries of metabolic disease: Meet UCLA’s Dr. Rajat Singh</a>
            <a className="black-text-url" href="https://www.news-medical.net/health/The-Effect-of-Intermittent-Fasting-on-the-Gut-Microbiome.aspx">The Effect of Intermittent Fasting on the Gut Micro-biome</a>
          </div>
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
          <p className="black-text-video" style={{marginTop: "-4%"}}>Dr Oz: Intermittent Fasting 101</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=MbSlcnzpFVg">The Ultimate Beginners Guide When to Eat and What to Eat</a>
          <p className="black-text-video">Dr. Mindy Pelz</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=vHmJ5PdiaR8">The Complete Women’s Fasting Guide For Longevity & Balancing Hormones</a>
        </div>
      </div>

      <div className="div-seven">
        <div className="flex-row">
          <img className="icon" src={SearchIcon} alt="Your Image" />
          <p className="white-text-title">ToolKits to Identify and Manage Burnout and Compassion Fatigue</p>
        </div>
        <div className="flex-row">
          <div className="flex-column-mobile">
            <p className="white-text-title">Fasting Resource Guide</p>
            <a className="white-text-url" href="https://www.foundmyfitness.com/topics/fasting">Found my Fitness</a>
          </div>
        </div>
      </div>
{/* 
      <div className="div-five">
        <div className="flex-column">
          <div className="flex-row-left-margin">
            <img className="icon" src={FactIcon} alt="Your Image" />
            <p className="black-text">Fact: The biomechanical strain on a caregiver who weighs 80 kg, is 186 cm tall, and who is bent 45 degrees forward, lifting a client's legs, weighing 10 kg, at a reaching distance of 30 cm place a whooping 255 kg strain in the lumbar area (weight of a male lion). The act of moving the client&#39;s legs, increases the load to the equivalent of a rhino weighing 765 kg!</p>
          </div>;km
          <div className="flex-row-left-margin">
            <img className="icon" src={QuestionIcon} alt="Your Image" />
            <p className="black-text">Questions: How can proper body mechanics help decrease the risk of workplace injury when handling clients? Is it true that good body mechanics alone cannot help me if I am lifting beyond what I safely should? What are some stretches and muscle-building exercises I can learn to help prevent injury? What are other ways I can help my body to manage the physical demands of being a home healthcare worker?</p>
          </div>
        </div>
      </div> */}

      <div className="div-six">
        <div className="flex-row">
          <img className="icon" src={HeartIcon} alt="Your Image" />
          <p className="black-text-title ">The list of links below was compiled to answer those questions.</p>
        </div>
        <div className="full-width">
          <p className="black-text-left">This directory of resources was designed to assist those who work in home healthcare to review ways to protect their bodies and decrease pain.</p> 
          <p className="black-text-left">Psychology Today:</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://blogs.cdc.gov/niosh-science-blog/2010/04/16/homehealthcare/">Body Mechanics and Safe Client Handling</a>
            <a className="black-text-url" href="https://blogs.cdc.gov/niosh-science-blog/2010/04/16/homehealthcare/">Centers for Disease Control and Prevention: Strains, Sprains, and Pains in Home Healthcare: Working in an Uncontrolled Environment</a>
            <a className="black-text-url" href="https://www.bcchiro.com/wp-content/uploads/2019/06/proper-lifting-web-final.pdf">BC Chiropractic Association : Proper Lifting: Think Twice/Lift Once</a>
            <a className="black-text-url" href="https://www.worksafebc.com/en/resources/health-safety/hazard-alerts/patient-handling-soaker-pads?lang=en">Work Safe BC: Hazard Alert: Patient Handling /Soaker Pads to Reposition</a>
            <a className="black-text-url" href="https://rnao.ca/sites/rnao-ca/files/9._The_Body_Mechanic.pdf">Registered Nurse Journal: The Body Mechanic</a>
          </div>
        </div>
        <div className="full-width">
          <p className="black-text-left">Stretching:</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://medium.com/optimal-life/how-stretching-everyday-could-save-your-life-eb57645d3b75">Medium Magazine: How Stretching Could Save Your Life</a>
            <a className="black-text-url" href="https://cbphysicaltherapy.com/six-stretches-every-healthcare-professional-needs-to-practice/">Physical Therapy Blog: 6 Stretches that Every Health Professional Needs to Practice</a>
            <a className="black-text-url" href="https://www.safeatworkca.com/siteassets/safety-resource-library/publications/stretches-for-healthcare-workers.pdf">Safe at Work California: Stretches for Healthcare Workers</a>
          </div>
        </div>
        <div className="full-width">
          <p className="black-text-left">Exercises:</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://ors.od.nih.gov/sr/dohs/HealthAndWellness/Ergonomics/Pages/exercises.aspx">National Institute of Health: Exercises and Stretches</a>
            <a className="black-text-url" href="https://nurseslabs.com/fit-nurse-5-types-workout-exercises-nurses-need/">NurseLabs: 5 Types of Workout Exercises Nurses Need To Do</a>
            <a className="black-text-url" href="https://www.prnhealthservices.com/blog-top-5-strength-training-exercises-for-nurses">PRN Healthcare: Top 5 Strength Training Exercises for Nurses</a>
          </div>
        </div>
        <div className="full-width">
          <p className="black-text-left">Protective Measures to Decrease Body Pain and Injury:</p> 
          <div className='flex-column'>
          <a className="black-text-url" href="https://www.naturalhealthchiropracticpc.com/articles/HealthyLiving_spine.pdf">American Chiropractor Association: Tips for a Healthy Spine</a>
            <a className="black-text-url" href="https://www.prevention.com/health/a19608765/best-shoes-for-nurses/">Prevention Magazine: 14 Best Shoes for Nurses and Other Workers Who Stand All Day, According to Podiatrists</a>
            <a className="black-text-url" href="https://www.sleepfoundation.org/sleeping-positions">The Sleep Foundation: What is the Best Sleep Position?</a>
            <a className="black-text-url" href="https://www.healthcentral.com/condition/back-pain/back-pain-obesity">Health Central: Can Obesity Cause Back Pain?</a>
            <a className="black-text-url" href="https://www.nytimes.com/wirecutter/reviews/best-ergonomic-seat-cushions/">New York Times: Best Ergonomic Car Seat Cushions</a>
            <a className="black-text-url" href="https://www.webmd.com/dvt/choose-compression-stockings">Web MD: How to Choose and Use Compression Stockings</a>
          </div>
      </div>
    </div>
      

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>CBC</p> 
          <a className="black-text-url" href="https://www.cbc.ca/listen/cbc-podcasts/410-the-dose/episode/15960833-what-are-the-benefits-of-intermittent-fasting">‘The Dose’</a>
          <p className="black-text-video">Intermittent Fasting Stories</p> 
          <a className="black-text-url" href="https://www.safetyandhealthmagazine.com/articles/19526-welcome-to-the-show">Learn from individualds who have learned to fast.</a>
          <p className="black-text-video">The Fasting Method</p> 
          <a className="black-text-url" href="https://www.thefastingmethod.com/podcast/">A discussion on fasting.</a>
        </div>
      </div>

      {/* <div className="div-ten">
        <div className="flex-row">
          <img className="icon" src={ListIcon} alt="Your Image" />
          <p className="white-text-title ">Professional Standards and Guidelines </p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>The National Institute for Occupational Health and Safety</p> 
          <a className="white-text-url" href="https://www.cdc.gov/niosh/topics/safepatient/default.html">Safe Patient Handling and Mobility</a>
          <p className="white-text-video">Occupational Safety and Health Administration</p> 
          <a className="white-text-url" href="https://www.osha.gov/healthcare/safe-patient-handling">Safe Patient Handlng</a>
        </div>
      </div> */}

      {/* <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={WebsiteIcon} alt="Your Image" />
          <p className="white-text-title ">Support Organizations</p>
        </div>
        <div className="full-width">
          <p className="white-text-video" style={{marginTop: "-4%"}}>Community Care Access Centre</p> 
          <a className="white-text-url" href="https://communicare.ca/wp-content/uploads/2020/12/CCAC-Lift-Transfer-Manual-English_Final-1.pdf">Manual For Lifts and Transfers (Safe Moving and Handling Practices)</a>
          <p className="white-text-video">Hawaii Occupational Health and Safety</p> 
          <a className="white-text-url" href="https://labor.hawaii.gov/hiosh/files/2022/09/Lifting-and-Moving-Patients-Safely.pdf">Lifting and Moving Patients Safely </a>
        </div>
      </div> */}
       

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={AppIcon} alt="Your Image" />
          <p className="black-text-title ">Apps & Technology</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Prevention Magazine</p> 
          <a className="black-text-url" href="https://www.prevention.com/food-nutrition/g42307300/intermittent-fasting-apps/">10 Best Intermittent Fasting Apps, According to Experts</a>

          <p className="black-text-video">Strengthen Your Back and Relieve Pain</p> 
          <a className="black-text-url" href="https://appadvice.com/apps/back-muscle-exercise-apps">List of Focused Fitness Apps</a>
          
          <p className="black-text-video" style={{marginTop: "-4%"}}>VeryWell Fit</p> 
          <a className="black-text-url" href="https://www.verywellfit.com/best-stretching-apps-5096980">The 5 Best Stretching Apps of 2023</a>

          <p className="black-text-video">Heart Matters Magazine</p> 
          <a className="black-text-url" href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/8-free-fitness-apps">7 Free Fitness Apps</a>
        </div>
    </div>
  </div>
  );
}

export default SelfCare;
