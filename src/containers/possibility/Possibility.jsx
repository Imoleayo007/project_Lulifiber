import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>SUBSCRIBE TO LULIFIBER TODAY</h4>/
      <h1 className="gradient__text">Struggling With <br /> Slow internet?</h1>
      <p>We know how important speed is to your productivity, so Get UNLIMITED internet with lightning SPEED up to 300mbps on our offers!</p>
      <h4><a href="https://www.instagram.com/lulifiber/">SUBSCRIBE NOW!</a></h4>
    </div>
  </div>
);

export default Possibility;
