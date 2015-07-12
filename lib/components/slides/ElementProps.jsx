import React from 'react';

const elementPropsSrc = require('../../images/elementProps.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Refactor element props into children.</h1>

        <img src={ elementPropsSrc } />
      </div>
    );
  }
});
