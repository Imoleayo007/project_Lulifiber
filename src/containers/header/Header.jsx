import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Experience Uninterrupted Connection With Lulifiber</h1>
      <p>You have a unique story to tell, and the internet is the platform that amplifies your voice.Let your passions guide you as you navigate the digital landscape.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join the Family</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Over 1,600 people are Connected to Luli</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
