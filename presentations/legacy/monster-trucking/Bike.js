import React from 'react';

const imgSrc = require('./images/bikes.gif');

const notes = `try not to land on your head`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          Dudes Flipping Bikes!
        </h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
