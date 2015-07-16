import React from 'react';

const wrapperSrc = require('../../images/wrapper.png');
const wrapperCallSrc = require('../../images/wrapperCall.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Composition with helper functions</h1>

        <img src={ wrapperCallSrc } />
        <br />
        <br />
        <img src={ wrapperSrc } />
      </div>
    );
  }
}
