import React from 'react';
import gpt3Logo from '../../assets/luli-logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>SUBSCRIBE to Luil ULTRA <br /> 300 MBPS <br /> CONSULT</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>LULI FIBRA CABLE SOLUTION LTD <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social Media</h4>
        <p><a href="https://wa.me/(+234)9066515018">WhatsApp</a></p>
        <p><a href="https://instagram.com/lulifiber?igshid=MzRlODBiNWFlZA==">Instagram</a></p>
        <p>Contact: <br />09066515018 <br /> 09137163768</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Visit Our Office</h4>
        <p>&#127980; No. 3B Adegbeyeni street Off Allen Avn,Ikeja,Lagos. </p>
        <p>&#127980; No. 42 Oba Elegushi Road Iketa,Lekki, Lagos.</p>
        <p>&#127980; Shop 4 Ground floor, Orelope Shopping Plaza, Egbeda, Lagos</p>
        <p>&#127980; No. 5B hujii road Off PortHacourt Road, New Owerri, Owerri</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>IMOLE</p>
        <p>+234 8066032148</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>ARC: 1729983 - INT/031/21. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
