import React from 'react';

const imgSrc = require('./images/remote.png');

const notes = `getting serious here`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          Very Technical Architecture Diagram
        </h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
