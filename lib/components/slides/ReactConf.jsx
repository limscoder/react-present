import React from 'react';

const reactConfSrc = require('../../images/react-conf.png');

export default React.createClass({
  render() {
    return (
      <div>
        <img src={ reactConfSrc } />
      </div>
    );
  }
});
