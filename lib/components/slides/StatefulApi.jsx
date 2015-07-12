import React from 'react';

const statefulApiSrc = require('../../images/statefulApi.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Mo' state Mo' problems</h1>

        <img src={ statefulApiSrc } />
      </div>
    );
  }
});
