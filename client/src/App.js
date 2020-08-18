import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/landing/Navbar';
import HomePage from './components/landing/Home';
import Regester from './components/auth/Register';
import './App.css';
import AuthState from './context/auth/AuthState';
import TransactionState from './context/transactions/transactionState';
import Login from './components/auth/Login';

function App() {
  return (
    <AuthState>
      <TransactionState>
    <div className="App">
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path = '/' component = {HomePage} />
            <Route exact path = '/auth/register' component = {Regester} />
            <Route exact path = '/auth/login' component = {Login} />
          </Switch>
        </Fragment>
      </Router>
    </div>
    </TransactionState> 
    </AuthState>
  );
}

export default App;
