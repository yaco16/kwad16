import React from 'react';
import Cards from 'src/components/Cards/cards';
import './style.scss';

const Projects = () => (
  <main>
    <h1 className="page__title">Here is the list of projects I work on</h1>
    <p>Hover the title of the card to learn more</p>
    <Cards />
  </main>
);

export default Projects;
