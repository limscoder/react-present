import React from 'react';
import {Router, Route, Redirect } from 'react-router';

import App from './components/App.jsx';
import './index.html';

(() => {
  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  const routes = (
    <Router>
      <Route path=":slideIdx" component={ App } />
    </Router>
  );

  React.render(routes, window.document.body);
})();
