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
import FullBanner from '../images/elder.jpg'

function Moral() {
  return (
    <div className="health-resilience-container">
      <div className="div-one">
        <p className="top-text">Managing the Ethical Dilemma of Elder Abuse</p>
        <p className="bottom-text">“To care for those who once cared for us is one of the highest honors.” Tia Walker</p>
      </div>

      <div className="div-two">
        <div className="flex-row">
          <img className="icon" src={BookIcon} alt="Your Image" />
          <p className="black-text-title">There are situations that arise in home healthcare where workers face ethical dilemmas
and moral distress over witnessing abusive treatment of elders, often at the hands of
family members or other care workers.</p>
        </div>

        <div className="normal-div">
          <p className="black-text-sub">Good
communication skills that build confidence, and enable home healthcare workers to
excel personally and professionally is the topic of this post. This will include learning
communication strategies to systematically structure client health reports that help
reduce medical error and increase confidence when reporting to family members and
team leaders. Acquiring specialized communication skills to better meet the needs of
older adults and /or clients experiencing issues such as dementia and Alzheimer&#39;s will
also be discussed. As will, learning communication skills to empower home healthcare
workers to manage stressful situations like communicating with clients at the end of life,
and deescalating family conflicts/ aggressive situations.</p>
        </div>
      </div>

      <div className="div-three">
        <p className="white-text-large">Becoming educated on resources to help elderly clients facing abuse and taking actions
that uphold ethical standards help home healthcare workers foster trust and contribute
to the betterment of their client's safety and welfare.</p>
      </div>


      <div className="div-four">
        <img className="icon" src={FullBanner} alt="Your Image" style={{ width: '100%', height: '40%' }} />
      </div>

      <div className="div-five">
        <div className="flex-column">
          <div className="flex-row-left-margin">
            <img className="icon" src={FactIcon} alt="Your Image" />
            <p className="black-text">Fact: It is estimated that more than 1 in 10 older adults experience some form of
abuse.</p>
          </div>
        </div>
      </div>


    <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={WebsiteIcon} alt="Your Image" />
          <p className="white-text-title ">Online Resources</p>
        </div>
        <div className="full-width">
        <a className="white-text-url" href="https://www.stjosephshomecare.ca/resources/committee-against-abuse-of-older-person-caaop-/InfoSheetWhatYouNeedToKnow.pdf">Government of Ontario: What You Need to Know About Elder Abuse</a>
<br /><br />
<a className="white-text-url" href="https://www.acelaw.ca/elder-abuse-resources/">Advocacy Centre for the Elderly: Elder Abuse Resources</a>
<br /><br />
<a className="white-text-url" href="https://cnpea.ca/images/elder-abuse-screening-intervention-and-response-guide-for-health-care-providers-feb-18.pdf">Elder Abuse Ontario: Elder Abuse Screening, Intervention and Response Guide for Health Care Providers</a>

        </div>
      </div>

    

      <div className="div-seven">
        <div className="flex-row">
          <img className="icon" src={SearchIcon} alt="Your Image" />
          <p className="white-text-title">ToolKits for Abuse Prevention</p>
        </div>
        <div className="flex-row">
          <div className="flex-column-mobile">
            <p className="white-text-title">Elder Abuse Prevention Ontario</p>
            <a className="white-text-url" href="https://eapon.ca/training-tools/">Training Tools</a>
          </div>
          <div className="flex-column-mobile">
            <p className="white-text-title">Canadian Network for the Prevention of Elder Abuse</p>
            <a className="white-text-url" href="https://cnpea.ca/en/tools/practice-tools">Help Resources</a>
          </div>
        </div>
      </div>

      <div className="div-eight">
        <div className="flex-row">
          <img className="icon" src={VideoIcon} alt="Your Image" />
          <p className="black-text-title ">Videos</p>
        </div>
        <div className="full-width">
        <p className="black-text-video">Alberta Elder Abuse Awareness Program: Video Resources</p>
<a className="black-text-url" href="https://albertaelderabuse.ca/resources/videos">Alberta Elder Abuse Resources</a>

        </div>
      </div>

      <div className="div-nine">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Podcasts</p>
        </div>
        <div className="full-width">
        <div>
        <p className="black-text-video" style={{ marginTop: "-4%" }}>National Center on Elder Abuse</p>
<a className="black-text-url" href="https://open.spotify.com/show/07nFMZdCy4yNRpV939seseorganizations">A discussion on Elder Abuse Prevention</a>
</div>

        </div>
      </div>
      


      <div className="div-eleven">
        <div className="flex-row">
          <img className="icon" src={PodcastIcon} alt="Your Image" />
          <p className="black-text-title ">Professional Associations</p>
        </div>
        <div className="full-width">
        <div>
        <p className="black-text-video" style={{ marginTop: "-4%" }}>RNAO</p>
<a className="black-text-url" href="https://rnao.ca/bpg/initiatives/abuse-and-neglect-older-adults-pan-canadian-best-
practice-guideline-initiative">Addressing Abuse of Older Adults- An RNAO Initiative</a>

        </div>

        </div>
      </div>

      

      

      <div className="div-ten">
        <div className="flex-row">
          <img className="icon" src={ListIcon} alt="Your Image" />
          <p className="white-text-title ">Professional Standards and Guidelines </p>
        </div>
        <div className="full-width">
        <p className="white-text-video" style={{ marginTop: "-4%" }}>OPSWA: Code of Ethics</p>
        <a className="white-text-url" href="https://ontariopswassociation.com/code-of-ethics/">Code of Ethics</a>

        <p className="white-text-video">American Nurses Association: </p>
        <a className="white-text-url" href="https://www.nursingworld.org/practice-policy/nursing-excellence/ethics/">Ethics and Human Rights</a>

        <p className="white-text-video">Care Quality Commission: </p>
        <a className="white-text-url" href="https://www.cqc.org.uk/about-us/fundamental-standards#:~:text=Safety,experience%20to%20keep%20you%20safe.">The Fundamental Standards</a>

        </div>
      </div>

     
  </div>
  );
}

export default Moral;
