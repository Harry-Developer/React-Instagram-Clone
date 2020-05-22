import React, { Component } from 'react';
import './App.css';

import Landing from './landing/index';
import Register from './register/index';

import { Router, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <Switch>

        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" render={() => <Landing />} />
        <Route exact path="/register" render={() => <Register />} />
      </Switch>
    );
  }
}

export default App;
