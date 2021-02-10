import React from 'react';
import './style.scss';
import chat from '../../../public/img/chat.jpg';

const Card = () => (
  <div className="card__container">
    {/* <div className="card__top"></div> */}
    <img className="card__image" src={chat} alt="cat" />
    <div className="card__down">
      <h2 className="card__title">Title</h2>
      <div className="card__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ut minus
        atque eaque, placeat delectus? Sequi sit sed vitae beatae quia
        cupiditate suscipit
      </div>
      <button className="card__button" type="button">
        <span>Visit &rarr;</span>
      </button>
    </div>
  </div>
);

export default Card;
