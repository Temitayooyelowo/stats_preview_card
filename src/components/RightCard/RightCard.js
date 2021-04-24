import React from 'react';

import header_image_desktop from'./image-header-desktop.jpg';
import header_image_mobile from './image-header-mobile.jpg';

import './RightCard.css';

const RightCard = () => {

  return (
    <div className="RightCard">
      <picture>
      <source srcSet={`${header_image_desktop} 1x, ${header_image_mobile} 2x`} media="(max-width: 1076px)" />
      <img
          className="header_image"
          srcSet={`${header_image_desktop} 1x, ${header_image_mobile} 2x`}
          alt="Full Logo"
          src={header_image_desktop} />
    </picture>
      {/* <div className="overlay"></div> */}
    </div>
  );
};

export default RightCard;