import React from 'react';

const formSrc = require('../../images/form.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Extend components with composition.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ formSrc } />
        </div>
      </div>
    );
  }
});
