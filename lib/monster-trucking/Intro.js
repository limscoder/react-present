import React from 'react';

const imgSrc = require('./images/monster-trucks.gif');

const notes = `
 * monster trucks are sweet!
 * remember to make fun of angular
`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          Monster Trucking!
        </h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
