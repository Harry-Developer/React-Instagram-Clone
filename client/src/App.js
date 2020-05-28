import React, { Component } from 'react';
import './App.css';

import Landing from './landing/index';
import Register from './register/index';
import Feed from './feed/index';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';

class App extends Component {

  
  render() {
    return (
      <Switch>

        <Route exact path="/login" render={() => <Landing />} /> 
        <Route exact path="/register" render={() => <Register />} />
        <PrivateRoute exact path="/" component={Feed} />
      </Switch>
    );
  }
}

export default App;
