import React from 'react';
import './style.scss';
import chat from '../../../public/img/chat.jpg';
import handleClic from './card_logic';

const Card = () => (
  <div className="card__container" >
    <img className="card__image" src={chat} alt="cat" />
    <div className="card">
      <figure className="card__front">
        <h2 className="card__title">Title</h2>
        <p className="card__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ut
          minus atque eaque, placeat delectus? Sequi sit sed vitae beatae quia
          cupiditate suscipit
        </p>
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
      <span>Click to flip</span>
    </div>
  </div>
);

export default Card;
