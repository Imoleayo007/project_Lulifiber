import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Ikeja and his neighbourhood',
    text: 'Ikeja, Oregun, Ogba, Ikeja GRA, Ogudu, Mende, Authony, Illupeju, Maryland, Cement.',
  },
  {
    title: 'Lekki and his neighbourhood',
    text: 'Lekki, Admiralty road, Maruwa, Freedow way, Ikate, Jakande, VI.',
  },
  {
    title: 'Egbeda and his neighbourhood',
    text: 'Unity estate,federal peace estate,Williams Estate,beco,punch estate,p&t estate ,VIP gardens estate,diamond estate,mangoro axis,ige estate,gowon estate',
  },
  {
    title: 'Owerri',
    text: 'All over Owerri',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Coverage Area &rarr;</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
