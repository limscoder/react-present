import React from 'react';

const statelessApiSrc = require('../../images/statelessApi.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Keep components as stateless as possible.</li>
          <li>Remove mutating methods (like 'toggle').</li>
          <li>Pass props instead.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ statelessApiSrc } />
        </div>
      </div>
    );
  }
});
