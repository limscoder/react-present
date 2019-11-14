import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import App from './components/App';

import './index.html';

export function renderSlideList(slideList) {
  let AppWithSlides = (props) => {
    return <App {...props}>{slideList}</App>;
  }

  let AppWithNoTransitionsAndSlides = (props) => {
    return <App disableTransitions={true} {...props}>{slideList}</App>;
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
