import React from 'react';
import './style.scss';
import { navSlide } from './app';

const Nav = () => (
  <nav>
    <div>
      {/* <a href="/home"> */}
      <h1>kwad16</h1>
      {/* </a> */}
    </div>
    <ul className="nav__links">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/work">Work</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </ul>
    <div className="burger" onClick={(event) => navSlide(event)}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
);

export default Nav;
