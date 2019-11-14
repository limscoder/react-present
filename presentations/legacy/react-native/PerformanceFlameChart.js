import React from 'react';

const imgSrc = require('./images/systrace.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Systrace flame</h1>
        <img src={ imgSrc } />
      </div>
    );
  }
}
