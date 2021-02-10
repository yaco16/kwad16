/* eslint-disable no-console */
import React from 'react';
import Card from './card';
import './style.scss';
// import data from
// import { log } from 'console';

const Cards = () => {
  console.log('coucou');
  return (
    <main>
      <h1 className="page__title">Here is the list of projects I work on</h1>
      <div className="cards__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Cards;
