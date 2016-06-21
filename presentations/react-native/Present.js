import React from 'react';

const imgSrc = require('./images/device.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={ imgSrc } />
      </div>
    );
  }
}
