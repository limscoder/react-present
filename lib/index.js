import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import App from './components/App';

import './index.html';

export function renderPresentation(presentation) {
  let AppWithSlides = (props) => {
    return <App {...props}>{presentation}</App>;
  }

  let AppWithNoTransitionsAndSlides = (props) => {
    return <App disableTransitions={true} {...props}>{presentation}</App>;
  }

  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  const routes = (
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRedirect to="/1" />
        <Route path=":slideIdx" component={AppWithSlides} />
        <Route
          path="no-transitions/:slideIdx"
          component={AppWithNoTransitionsAndSlides}
        />
      </Route>
    </Router>
  );

  ReactDOM.render(routes, window.document.getElementById("app"));
}
