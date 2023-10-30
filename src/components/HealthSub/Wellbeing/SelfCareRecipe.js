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
import Lunch from '../images/lunch.png'
function SelfCareRecipe() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Health and Self Care </p>
        <p className="bottom-text">Quick and Healthy recipes for you to try at home</p>
      </div>

      <div className="div-three">
        <p className="white-text-large">We have compiled a list of resources to assist home health care workers in their search
of easy, healthy recipes and nutritional tips, including how to grow your own sprouts
and how to make probiotic rich, fermented foods.</p>
      </div>

      <div className="div-six">
        <div className="flex-row">
          <img className="icon" src={FastingIcon} alt="Your Image" />
          <p className="black-text-title ">Recipe Collection</p>
        </div>
        <div className="full-width">
          <p className="black-text-left">Feasting at Home</p> 
          <div className='flex-column'>
            <a className="black-text-url" href="https://www.feastingathome.com/category/featured/30-minute-meals/">30 Minute Meals</a>
            <a className="black-text-url" href="https://detoxinista.com/">Detoxinista - sign up for a weekly menu plan
            Real Food Made Fast and Easy</a>
            </div>
        </div>
    </div>

    <div className="div-six-alt">
        <div className="flex-row">
          <img className="icon" src={Lunch} alt="Your Image" />
          <p className="black-text-title ">Healthy, Easy Snack and Meal Ideas</p>
        </div>
        <div className="full-width">
          <div className='flex-column'>
            <a className="black-text-url" href="https://www.loveandlemons.com/energy-balls/">Energy Balls</a>
            <a className="black-text-url" href="https://cleananddelicious.com/3-ingredient-banana-oatmeal-breakfast-cookies/">3 Ingredient Banana Oatmeal Cookies</a>
            <a className="black-text-url" href="https://www.bowlofdelicious.com/steel-cut-oats/">Easy Overnight Steel Cut Oats top with nuts and fruit</a>
            <a className="black-text-url" href="https://cookieandkate.com/best-lentil-soup-recipe/">Delicious Easy Lentil Soup</a>
            <a className="black-text-url" href="https://www.loveandlemons.com/quinoa-salad-recipe/">Mediterranean Quinoa Salad</a>
            <a className="black-text-url" href="https://www.marthastewart.com/8222370/amaranth-grain-guide">Martha Stewart How to Buy, Cook, and Enjoy Amaranth, the Healthy Whole Grain You Should Eat More Of</a>
            <a className="black-text-url" href="https://www.myfermentation.com/">Fermentation Recipes</a>
          </div>
        </div>
    </div>

    <div className="div-six">
        <div className="flex-row">
          <img className="icon" src={HeartIcon} alt="Your Image" />
          <p className="black-text-title ">Healthy Eating Tips and Tricks</p>
        </div>
        <div className="full-width">
          <div className='flex-column'>
            <a className="black-text-url" href="https://www.foodsafetynews.com/2023/03/environmental-working-group-unveils-its-dirty-dozen-clean-15-for-2023/">Food Safety News The Clean 15 - Dirty Dozen List of Foods</a>
            <a className="black-text-url" href="https://wellnessmama.com/health/broccoli-sprouts/">Katie Wells How to Grow Broccoli Sprouts (Why we all Should)</a>
            <a className="black-text-url" href="https://naturespath.com/en-ca/blogs/posts/7-natural-sugar-substitutes-to-try-in-cooking-baking">Sugar Substitutes for Baking</a>
            <a className="black-text-url" href="https://www.webmd.com/obesity/features/crunch-chew-your-way-to-healthier-eating">Chew Your Way to Healthier Eating</a>
          </div>
        </div>
    </div>

    

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Taste of Home</p> 
          <a className="black-text-url" href="https://www.tasteofhome.com/collection/these-5-ingredient-dinners-will-save-your-weeknights/">60 Simple Dinner Ideas with 5 Ingredients (or Less!)</a>
          <p className="black-text-video">Dr Zack Bush</p> 
          <a className="black-text-url" href="https://www.youtube.com/watch?v=hkNhFY-s4GM">Chemical Farming - The Loss of Human Health</a>
        </div>
      </div>

      <div className="div-seven">
        <div className="flex-row">
          <img className="icon" src={SearchIcon} alt="Your Image" />
          <p className="white-text-title">ToolKits for Healthy Eating Resources</p>
        </div>
        
        <div className="flex-row">
          <div className="flex-column-mobile">
            <p className="white-text-title">Health Eating</p>
            <a className="white-text-url" href="https://chopra.com/tags/healthy-eating">From Deepak Chopra</a>
          </div>
          <div className="flex-column-mobile">
            <p className="white-text-title">Food Safety</p>
            <a className="white-text-url" href="https://www.drweil.com/diet-nutrition/food-safety/">from Dr. Weil</a>
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

      
      

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
          <p className="black-text-video" style={{marginTop: "-4%"}}>Levels- A Whole New Level</p> 
          <a className="black-text-url" href="https://podtail.com/en/podcast/levels-a-whole-new-level/">Health and Fitness Resource</a>
          <p className="black-text-video">The Genius Life</p> 
          <a className="black-text-url" href="https://podcastnotes.org/category/genius-life/">Max Lugavere: health /science journalist, filmmaker, bestselling author</a>
          <p className="black-text-video">Benefits of Cutting sugar</p> 
          <a className="black-text-url" href="https://podcasts.nu/avsnitt/life-after-sugar/104-cutting-sugar-can-help-you-feel-younger-dr-roizen-Iv492weqo">A deep dive with Dr. Roizen.</a>
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
          <p className="black-text-video" style={{marginTop: "-4%"}}>Readers Digest Canada</p> 
          <a className="black-text-url" href="https://www.readersdigest.ca/home-garden/money/shopping-apps-save-money-groceries-canada/">The Best Apps to Save Money on Groceries</a>
        </div>
    </div>
  </div>
  );
}

export default SelfCareRecipe;
