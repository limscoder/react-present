import React from 'react';

const imgSrc = require('./images/wat.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>search</h1>

        <ul>
          <li>current system does not stem non-english words correctly</li>
          <li>Sean Melody is including localized search in the criteria for next gen search</li>
        </ul>

      </div>
    );
  }
}
