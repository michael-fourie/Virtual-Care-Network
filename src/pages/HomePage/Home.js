import React from 'react';
import { Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import InfoSectionLanding from '../../components/InfoSection/InfoSectionLanding';
import InfoSectionLandingTwo from '../../components/InfoSection/InfoSectionLandingTwo';

const Home = () => {
    
    return (
        <>
            <InfoSectionLanding {...homeObjOne} />
            <InfoSectionLandingTwo {...homeObjThree} />
            {/* <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} /> */}
        </>
    )
}

export default Home;