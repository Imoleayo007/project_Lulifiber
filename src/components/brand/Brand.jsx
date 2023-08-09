import React from 'react';
import { google, rack, paystack, ccc, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={rack} />
    </div>
    <div>
      <img src={paystack} />
    </div>
    <div>
      <img src={ccc} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
