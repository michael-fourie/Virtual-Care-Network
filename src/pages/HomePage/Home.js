import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import InfoSectionLanding from '../../components/InfoSection/InfoSectionLanding';

const Home = () => {
    return (
        <>
            <InfoSectionLanding {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;