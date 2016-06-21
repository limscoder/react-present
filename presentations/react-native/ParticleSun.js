import React from 'react';

const imgSrc = require('./images/particle-sun.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>react-native and IoT devices</h1>
        <img src={ imgSrc } />
      </div>
    );
  }
}
