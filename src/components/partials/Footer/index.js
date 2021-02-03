import React from 'react';
import { Link } from 'react-router-dom';


import './style.scss';
import logoLinkedIn from 'src/assets/images/linkedin.png';
import logoTwitter from 'src/assets/images/twitter.png';

const Footer = () => (
  <div className="footer__container">
    <div className="footer">
      <div className="footer__header footer_1">
        <h2><Link exact to="#">Contact me</Link></h2>
      </div>

      <div className="footer__header footer_2">
        <h2><Link exact to="#">Terms</Link></h2>

      </div>
      <div className="footer__header footer_3">
        <h2>Social</h2>
        <Link exact to="#">LinkedIn</Link>
        <Link exact to="#">Twitter</Link>
      </div>
    </div>
  </div>
);

export default Footer;
