import React from 'react';

const defaultPropsSrc = require('../../images/defaultProps.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <div className="rcp-SlideDeck-Centered">
          <img src={ defaultPropsSrc } />
        </div>
      </div>
    );
  }
}
