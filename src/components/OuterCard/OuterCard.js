import React from 'react';

import {LeftCard} from '../LeftCard';
import {RightCard} from '../RightCard';

import './OuterCard.css';

const OuterCard = () => {

  return (
    <div className="OuterCard">
      <LeftCard />
      <RightCard />
    </div>
  );
};

export default OuterCard;