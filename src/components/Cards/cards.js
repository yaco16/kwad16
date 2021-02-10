import React from 'react';
import Card from './card';
import './style.scss';

const Cards = () => (
  <main>
    <h1>Here is the list of projects I work on</h1>
    <div className="cards__container">
      <Card />
    </div>
  </main>
);

export default Cards;
