import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'recact-router-dom';
import NavBar from './components/landing/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Route exact path = '/' component = {NavBar} />
      </Fragment>
    </div>
  );
}

export default App;
