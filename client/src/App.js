import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/landing/navbar';
import HomePage from './components/landing/Home';
import Regester from './components/auth/Register';
import './App.css';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AuthState>
    <div className="App">
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path = '/' component = {HomePage} />
            <Route exact path = '/auth/regester' component = {Regester} />
          </Switch>
        </Fragment>
      </Router>
    </div>
    </AuthState>
  );
}

export default App;
