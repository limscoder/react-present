import React from 'react';

const statefulApiSrc = require('../../images/statefulApi.png');

export default React.createClass({
  render() {
    return (
      <div>
        <div className="rcp-SlideDeck-Centered">
          <img src={ statefulApiSrc } />
        </div>
      </div>
    );
  }
});
