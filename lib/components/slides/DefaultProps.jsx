import React from 'react';

const defaultPropsSrc = require('../../images/defaultProps.png');

export default React.createClass({
  render() {
    return (
      <div>
        <div className="rcp-SlideDeck-Centered">
          <img src={ defaultPropsSrc } />
        </div>
      </div>
    );
  }
});
