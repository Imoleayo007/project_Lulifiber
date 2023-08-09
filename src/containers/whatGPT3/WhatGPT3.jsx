import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Why Luli Fiber" text="Internet isn't just a tool, it&apos;s a VAST CANVAS where your dreams can come to life. When you change your thoughts, remember to also change your world. 'Lulifiber, the transformation to your world'. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The speed are beyond your imagination</h1>
      <p>SUBSCRIBE NOW!</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="100% FIBER OPTIC" text="Ultra-speed 100% end-to-end fiber to ensure a better connection." />
      <Feature title="5G WIFI INCLUDED" text="5G wi-fi included to ensure a good connection throughout the house." />
      <Feature title="CUSTOM SUPPORT" text="Personalized technical support so you don't run out of internet." />
    </div>
  </div>
);

export default WhatGPT3;
