/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import chat from '../../../public/img/chat.jpg';
// import handleClic from './card_logic';

const Card = ({project}) => (
  <div className="card__container">
    <img className="card__image" src={chat} alt="cat" />
    <div className="card">
      <figure className="card__front">
        <h2 className="card__title">{project.title}</h2>
        <p className="card__text">{project.description}</p>
      </figure>
      <figure className="card__back">
        <ul>
          <li>tech1</li>
          <li>tech2</li>
          <li>tech3</li>
          <li>tech4</li>
        </ul>
      </figure>
    </div>
    <div className="card__footer" type="button">
      <span>
        <Link to="#"> Click here to see</Link>
      </span>
    </div>
  </div>
);

export default Card;
