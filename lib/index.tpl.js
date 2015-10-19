import slideList from './--slide-list-dir--/slideList';

import React from 'react';
import {Router, Route, Redirect } from 'react-router';

import SlideDeck from './components/SlideDeck.js';
import './index.html';

const colors = [
  '#00a9e0',
  '#b81b10',
  '#f6a900',
  '#f66349',
  '#8dc63f',
  '#005eb8',
  '#ff8200',
  '#00b398',
  '#da1884',
  '#7832a5',
  '#acadad'
];

class App extends React.Component {
  render() {
    return (
      <SlideDeck slideIndex={ this._getCurrentSlideIdx() }
                 colors={ colors }
                 onSlideChange={ this._onSlideChange }>
        { slideList }
      </SlideDeck>
    );
  }

  _getCurrentSlideIdx() {
    return parseInt(this.props.params.slideIdx) - 1;
  }

  _onSlideChange = (slideIdx) => {
    const newPath = `/${slideIdx + 1}`;
    this.props.history.pushState(null, newPath);
  }
}

(() => {
  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  const routes = (
    <Router>
      <Redirect from="/" to="/1" />
      <Route path=":slideIdx" component={ App } />
    </Router>
  );

  React.render(routes, window.document.body);
})();
