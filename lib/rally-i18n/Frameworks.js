import React from 'react';

const imgSrc = require('./images/wat.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>moving parts</h1>

        <p>services, search, churro, ext, spring, meta-data</p>

        <img src={ imgSrc } />
      </div>
    );
  }
}
