import React from 'react';

const videoSrc = require('./images/quack.mov');

export default class Slide extends React.Component {
  render() {
    const highlightStyle = {
      color: 'black'
    };

    return (
      <div>
        <h1><span style={ highlightStyle }>r</span>evolving <span style={ highlightStyle }>duck</span> <span style={ highlightStyle }>s</span>imulator</h1>
        <video src={ videoSrc }
               autoPlay
               loop
               muted />
      </div>
    );
  }
}
