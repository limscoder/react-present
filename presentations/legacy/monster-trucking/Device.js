import React from 'react';

const imgSrc = require('./images/device.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Mobile Remote
        </h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
