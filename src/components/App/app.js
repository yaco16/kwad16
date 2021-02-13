import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';

import Nav from 'src/components/Nav/nav';
// import Footer from 'src/components/Footer';

import Opening from 'src/components/Opening/opening';
import Error404 from 'src/components/Error404/error404';
import Home from 'src/components/Home/home';
import About from 'src/components/About/about';
import SignUp from 'src/components/SignUp/signUp';
import Login from 'src/components/Login/login';
import Contact from 'src/components/Contact/contact';
import Cards from 'src/Pages/projects';

const App = () => (
  <div className="app__container">
    <Nav />

    <main>
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
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/projects">
          <Cards />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </main>
    {/* <Footer /> */}
  </div>
);

export default App;
