import React from 'react';
import './Information.css'; // Import the CSS file
import coop from "./coop.PNG"
import worker from "./social-worker.png"
import risk from "./risk.png"

const Infomration = () => {
  return (
    <div className="page">
      {/* First div */}
      <div className="content">
        <div className="text">
          <h2>DISCLAIMER: THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE or PROFESSIONAL ADVICE</h2>
          <p>All material on this site is intended for educational and informative purposes only and is not intended to serve as medical or professional advice. Always consult a physician/health care professional before making any changes to your physical or mental health to determine if it is right for your unique needs. Any reference to professional practice knowledge and/or professional resources is for educational and informative purposes only. It is NOT intended to infer that Home Healthcare Workers can/should work outside of the scope of their practice since they are not regulated healthcare professionals.</p>
        </div>
        <div className="image">
          <img src={risk} alt="Third Div Image" />
        </div>
      </div>
      
      {/* Second div */}
      <div className="content">
        <div className="image">
          <img src={worker} alt="Second Div Image" />
        </div>
        <div className="text">
          <h2> The Virtual Care Network Building Community for Home Healthcare Workers</h2>
          <p>Home Healthcare Workers provide vital care for those in need in our communities. Despite their importance, they struggle with low wages, physically and emotionally demanding working conditions, and get little acknowledgment of their value as members of our community healthcare team. These place them at high risk of burnout which can drive them away from the profession. The Virtual Care Network seeks to support and empower Home Healthcare Workers by addressing these threats to their health and well-being. We also seek to build confidence and increase knowledge of skills and practice issues common to home-care settings. To do so, we have compiled collections of relevant, evidence-based educational resources that include a range of media sources and subject matter experts. To further foster  build community, we have also created a forum for Home Healthcare Workers to give them a designated space to network, share experiences, and gain peer support.</p>
        </div>
      </div>

      {/* Third div */}
      <div className="content">
        <div className="text">
          <h2>We are the Canadian Care Workers Co-operative</h2>
          <p>As a collaborative of fellow home healthcare workers, clients their families, and concerned citizens, we seek to provide much-needed support and respect to those who work in home healthcare. This website is a living document. Therein, it's intended to grow and adapt to ensure its content gives home healthcare workers the support they need. This site belongs to Home Healthcare Workers !</p>
        </div>
        <div className="image">
          <img src={coop} alt="First Div Image" />
        </div>
      </div>

    </div>
  );
};

export default Infomration;
