import React from 'react';
import { Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import InfoSectionLanding from '../../components/InfoSection/InfoSectionLanding';
import InfoSectionLandingTwo from '../../components/InfoSection/InfoSectionLandingTwo';
import InfoSectionLandingThree from '../../components/InfoSection/InfoSectionLandingThree';
import InfoSectionLandingFour from '../../components/InfoSection/InfoSectionLandingFour';


const Home = () => {
    
    return (
        <>
            <InfoSectionLanding {...homeObjOne} />
            <InfoSectionLandingTwo {...homeObjTwo} />
            <InfoSectionLandingThree {...homeObjThree} />
            <InfoSectionLandingFour {...homeObjFour} />
        </>
    )
}

export default Home;