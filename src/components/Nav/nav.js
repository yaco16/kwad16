import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import { navSlide } from './nav_logic';

const Nav = () => (
  <nav>
    <div>
      <NavLink exact to="/home">
        <h1>kwad16</h1>
      </NavLink>
    </div>

    <div className="nav__burger" onClick={(event) => navSlide(event)}>
      <div className="nav__burger__line1" />
      <div className="nav__burger__line2" />
      <div className="nav__burger__line3" />
    </div>

    <ul className="nav__links">
      <li className="nav__link">
        <NavLink exact to="/about">
          About me
        </NavLink>
      </li>
      <li className="nav__link">
        <NavLink exact to="/projects">
          Projects
        </NavLink>
      </li>
      <li className="nav__link">
        <NavLink exact to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav__link">
        <NavLink exact to="/signup">
          Sign up
        </NavLink>
      </li>
      <li className="nav__link">
        <NavLink exact to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
    <div className="nav__lang">Eng/Fr</div>
  </nav>
);

export default Nav;
