import React from 'react';

import './LeftCard.css';

const LeftCard = () => {

  return (
    <div className="LeftCard">
      <div className="mainContainer">
        <h1 className="mainHeading">
          Get <span className="headingSpan">insights</span> that help your business grow.
        </h1>

        <div className="otherContainer">
          <div className="mainParagraph">
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          </div>

          <div className="stat">
              <div className="group">
                <h2>10k+</h2>
                <p>Companies</p>
              </div>

              <div className="group">
                <h2>314</h2>
                <p>Template</p>
              </div>

            <div className="group">
              <h2>12M+</h2>
              <p>Queries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;