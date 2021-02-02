import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Opening from 'src/components/Opening';
import Error404 from 'src/components/Error404';
import Home from 'src/components/Home';
import About from 'src/components/About';

const App = () => (
  <div className="app">
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
  </div>
);

export default App;
