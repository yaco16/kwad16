import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

import Opening from 'src/components/Opening';
import Error404 from 'src/components/Error404';
import Home from 'src/components/Home';
import About from 'src/components/About';

const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route exact path="/">
        <Opening />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
