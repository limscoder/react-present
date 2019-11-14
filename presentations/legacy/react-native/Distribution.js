import React from 'react';

const imgSrc = require('./images/internet.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={ imgSrc } height="700"/>
      </div>
    );
  }
}
