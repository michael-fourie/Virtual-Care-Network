import React from 'react';
import { Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import InfoSectionLanding from '../../components/InfoSection/InfoSectionLanding';
import InfoSectionLandingTwo from '../../components/InfoSection/InfoSectionLandingTwo';
import InfoSectionLandingThree from '../../components/InfoSection/InfoSectionLandingThree';


const Home = () => {
    
    return (
        <>
            <InfoSectionLanding {...homeObjOne} />
            <InfoSectionLandingTwo {...homeObjThree} />
            <InfoSectionLandingThree {...homeObjFour} />
            {/* <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} /> */}
        </>
    )
}

export default Home;