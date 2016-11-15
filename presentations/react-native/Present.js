import React from 'react';

const imgSrc = require('./images/react-remote.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={ imgSrc } height="765" width="765" />
      </div>
    );
  }
}
