import React from 'react';

const statelessApiSrc = require('../../images/statelessApi.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>PropTypes are the API</h1>

        <p>Remove state and public mutating methods (like 'toggle').</p>

        <img src={ statelessApiSrc } />
      </div>
    );
  }
}
