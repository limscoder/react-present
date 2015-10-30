import React from 'react';

const imgSrc = require('./images/rube.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>appsdk</h1>

        <p>toughest challenge, 3 options</p>

        <img src={ imgSrc } />

      </div>
    );
  }
}
