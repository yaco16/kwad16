/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import pimz from '../../../public/img/pimz.png';
import kwad16 from '../../../public/img/kwad16.png';
import todo from '../../../public/img/todo.png';

// import handleClic from './card_logic';

const Card = ({ project }) => {
  const { image, title, description, url, technos } = project;
  console.log('image:', image);
  let photo;
  if (image === 'pimz') {
    photo = pimz;
  }
  if (image === 'kwad16') {
    photo = kwad16;
  }
  if (image === 'todo') {
    photo = todo;
  }

  return (
    <div className="card__container">
      <img className="card__image" src={photo} alt={title} />
      <div className="card">
        <figure className="card__front">
          <h2 className="card__title">{title}</h2>
          <p className="card__text">{description}</p>
        </figure>
        <figure className="card__back">
        <h3 className="card__technos">Used technologies</h3>
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
};

Card.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Card;
