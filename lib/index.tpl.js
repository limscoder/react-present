import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import App from './components/App';
import slideList from './--slide-list-dir--/slideList';

import './index.html';

class AppWithSlides extends React.Component {
  render() {
    return <App {...this.props}>{slideList}</App>;
  }
}

class AppWithNoTransitionsAndSlides extends React.Component {
  render() {
    return <App disableTransitions={true} {...this.props}>{slideList}</App>;
  }
}

(() => {
  if (!window.React) {
    window.React = React; // Global React needed for React dev tools
  }

  const routes = (
    <Router history={browserHistory}>
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
})();
