import React from 'react';
import { Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour, currentEvents} from './Data';
import InfoSectionLanding from '../../components/InfoSection/InfoSectionLanding';
import InfoSectionLandingTwo from '../../components/InfoSection/InfoSectionLandingTwo';
import InfoSectionLandingThree from '../../components/InfoSection/InfoSectionLandingThree';
import InfoSectionLandingFour from '../../components/InfoSection/InfoSectionLandingFour';
import CurrentEventInfo from '../../components/InfoSection/CurrentEventInfo';

const Home = () => {
    
    return (
        <>
            <InfoSectionLanding {...homeObjOne} />
            <InfoSectionLandingTwo {...homeObjTwo} />
            <CurrentEventInfo {...currentEvents}/>
            <InfoSectionLandingThree {...homeObjThree} />
            <InfoSectionLandingFour {...homeObjFour} />
        </>
    )
}

export default Home;