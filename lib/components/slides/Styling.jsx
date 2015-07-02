import React from 'react';

const cssSrc = require('../../images/css.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>The <code>cascading</code> nature of CSS makes it very brittle.</li>
          <li>Automated CSS tests are difficult to write and run.</li>
          <li>Global class names are a recipe for disaster.</li>
          <li>I'm looking at you bootstrap.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ cssSrc } />
        </div>
      </div>
    );
  }
});
