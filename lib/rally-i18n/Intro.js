import React from 'react';

const imgSrc = require('./images/roadmap.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>i18n roadmap</h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
