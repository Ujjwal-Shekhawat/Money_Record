import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/landing/navbar';
import HomePage from './components/landing/home';
import Regester from './components/auth/Register';
import './App.css';
import home from './components/landing/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path = '/auth/regester' component = {Regester} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
