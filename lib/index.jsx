import React from 'react';
import {Router, Route, Redirect } from 'react-router';

import './index.html';

import SlideDeck from './components/SlideDeck.jsx';

(() => {
  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  class App extends React.Component {
    render () {
      return this.props.children;
    }
  }

  const routes = (
    <Router>
      <Route component={ App }>
        <Redirect from="/" to="/1" />
        <Route path=":slideIdx" component={ SlideDeck } />
      </Route>
    </Router>
  );

  React.render(routes, window.document.getElementById('slide-deck'));
})();
