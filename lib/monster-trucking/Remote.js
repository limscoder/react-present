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

        <ul>
          <li>PubNub messages use Flux Standard Action format</li>
          <li>PubNub messages can be dispatched directly by redux</li>
        </ul>

        <img src={ imgSrc } />
      </div>
    );
  }
}
