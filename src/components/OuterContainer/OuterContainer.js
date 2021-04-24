import React from 'react';

import {OuterCard} from '../OuterCard';
import './OuterContainer.css';

const OuterContainer = () => {

  return (
    <div className="OuterContainer">
      <OuterCard />

      <p className="footer">Challenge by Frontend Mentor. Coded by <a href="https://www.frontendmentor.io/profile/Temitayooyelowo" target="_blank" rel="noreferrer">Tayo</a></p>
    </div>
  );
};

export default OuterContainer;