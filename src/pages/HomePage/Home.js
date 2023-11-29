import React from 'react';
import { Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, currentEvents} from './Data';
import InfoSectionLanding from '../../components/InfoSection/InfoSectionLanding';
import InfoSectionLandingTwo from '../../components/InfoSection/InfoSectionLandingTwo';
import InfoSectionLandingThree from '../../components/InfoSection/InfoSectionLandingThree';
import InfoSectionLandingFour from '../../components/InfoSection/InfoSectionLandingFour';
import CurrentEventInfo from '../../components/InfoSection/CurrentEventInfo';
import './Home.css'
import heart from './assets/heartbeat.png'
import hand from './assets/hand.jpg'
import contact from './assets/contact.PNG'
const Home = () => {
    const divStyle = {
        position: 'relative',
        // Other styles you might want to include such as height, width, etc.
      };
    
      const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${hand})`,
        opacity: 0.3,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // Adjust z-index as needed to ensure it's below other content
        zIndex: -1,
      };
    
    
    return (
        <>
            <InfoSectionLanding {...homeObjOne} />

            <div className='flex-div' style={divStyle}>
                <div style={overlayStyle}></div>
                <img className='heart-icon' src={heart} />
                <p className='heart-text'>
                Committed to Building Community For Home Healthcare Workers
                </p>
            </div>
            <InfoSectionLandingTwo {...homeObjTwo} />
            <CurrentEventInfo {...currentEvents}/>
            <InfoSectionLandingThree {...homeObjThree} />
            <InfoSectionLandingFour {...homeObjFour} />
        </>
    )
}

export default Home;