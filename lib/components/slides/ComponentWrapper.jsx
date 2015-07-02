import React from 'react';

const wrapperSrc = require('../../images/wrapper.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Use a function to compose components for you.</li>
          <li>Wrapped components get consistent API and behavior.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ wrapperSrc } />
        </div>
      </div>
    );
  }
});
