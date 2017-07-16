import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Header from './components/header'
import Hero from './components/hero'

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Header />
          <Route exact path='/' component={Hero}/>
        </div>
      </Router>
    );
  }
}

export default App;
