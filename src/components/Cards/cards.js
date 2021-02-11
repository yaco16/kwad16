/* eslint-disable no-console */
import React from 'react';
import projects from '../../../public/data/projects';
import Card from './card';

import './style.scss';

const Cards = () => {
  const cardsList = projects.map((project) => <Card key={project.id} project={project} />);
  return <div className="cards__container">{cardsList}</div>;
};

export default Cards;
