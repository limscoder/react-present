import React from 'react';

const imgSrc = require('./images/monster-trucks.gif');

export default class Slide extends React.Component {
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
