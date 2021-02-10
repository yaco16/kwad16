import React from 'react';
import './style.scss';
import handleClic from './card_logic';
import chat from '../../../public/img/chat.jpg';

const Card = () => (
  <div
    className="card__container"
    onClick={handleClic}
  >
    {/* <div className="card"> */}
    <div className="card card__recto">
      {/* <div className="card__top"></div> */}
      <img className="card__image" src={chat} alt="cat" />
      <div className="card__down">
        <h2 className="card__title">Title</h2>
        <div className="card__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ut
          minus atque eaque, placeat delectus? Sequi sit sed vitae beatae quia
          cupiditate suscipit
        </div>
        <div className="card card__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          incidunt rem distinctio iure excepturi error?
        </div>
        <button className="card__button" type="button">
          <span>Visit &rarr;</span>
        </button>
      </div>
    </div>
    <div className="card__verso">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At est rerum
      ipsum impedit. Eius, deserunt.
    </div>
    {/* </div> */}
  </div>
);

export default Card;
