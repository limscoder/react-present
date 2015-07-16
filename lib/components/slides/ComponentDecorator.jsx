import React from 'react';

const decoratorSrc = require('../../images/decorator.png');
const decoratorCallSrc = require('../../images/decoratorCall.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Use decorators for composing ES6 classes</h1>

        <img src={ decoratorCallSrc } />
        <br />
        <br />
        <img src={ decoratorSrc } />
      </div>
    );
  }
}
