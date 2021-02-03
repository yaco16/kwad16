import React from 'react';
import './style.scss';
import Nav from 'src/components/partials/Nav';
import HomeContent from './content';
import Footer from 'src/components/partials/Footer';

const Home = () => (
  <div>
    <Nav />
    <HomeContent />
    <Footer />
  </div>
);

export default Home;
