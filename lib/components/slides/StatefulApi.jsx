import React from 'react';

const statefulApiSrc = require('../../images/statefulApi.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Mo' state Mo' problems</h1>

        <img src={ statefulApiSrc } />
      </div>
    );
  }
}
