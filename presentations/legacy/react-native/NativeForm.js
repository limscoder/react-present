import React from 'react';

const imgSrc = require('./images/android-form.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Native widgets</h1>
        <img src={ imgSrc } />
      </div>
    );
  }
}
