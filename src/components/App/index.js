import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Opening from 'src/components/Opening';
import Error404 from 'src/components/Error404';
import Home from 'src/components/Home';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Opening />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </div>
);

export default App;
