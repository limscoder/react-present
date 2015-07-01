import React from 'react';

const elementPropsSrc = require('../../images/elementProps.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Lame</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ elementPropsSrc } />
        </div>
      </div>
    );
  }
});
