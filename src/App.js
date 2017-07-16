import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Header from './components/header'
import Intro from './components/intro'
import Schedule from './components/schedule'

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <Header />
          <Route exact path='/' component={Intro}/>
          <Route exact path='/schedule' component={Schedule}/>
        </div>
      </Router>
    );
  }
}

export default App;
