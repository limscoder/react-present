import React from 'react';

const cssSrc = require('../../images/css.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>CSS: here be dragons</h1>

        <p>Global class names are a recipe for disaster (here's looking at you bootstrap).</p>

        <img src={ cssSrc } />
      </div>
    );
  }
});
