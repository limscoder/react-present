import React from 'react';

const imgSrc = require('./images/kitt.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Use a separate environment for development</h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
