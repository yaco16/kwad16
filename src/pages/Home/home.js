import React from 'react';
import './style.scss';
import TypedJob from 'src/components/Typed/typed';

const Home = () => (
  <main>
    <div className="home__title">Hey, I'm Yannik</div>
    <div className="home__subtitle">
      I'm a French <span> </span>
      <span id="typedJob">
        <TypedJob
          strings={[
            'journalist',
            'web redactor',
            'corrector',
            'accountant',
            'auditor',
            'fullstack JavaScript developer',
          ]}
        />
      </span>
    </div>
  </main>
);

export default Home;
