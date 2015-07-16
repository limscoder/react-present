import React from 'react';

const mixinSrc = require('../../images/mixin.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>That sounds like a mixin!</h1>

        <img src={ mixinSrc } />
      </div>
    );
  }
}
