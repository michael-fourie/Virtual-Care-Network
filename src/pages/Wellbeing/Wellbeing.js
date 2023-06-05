import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';

function Wellbeing() {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Wellbeing;