import React from 'react';

const wrapperSrc = require('../../images/wrapper.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Composition with helper functions</h1>

        <p>Wrapped components get consistent API and behavior.</p>

        <img src={ wrapperSrc } />
      </div>
    );
  }
}
