import React from 'react';

const videoSrc = require('./images/quack.mp4');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="rcp-Highlight">r</span>evolving <span className="rcp-Highlight">duck</span> <span className="rcp-Highlight">s</span>imulator</h1>
        <video src={ videoSrc }
               height={ 300 }
               autoPlay
               loop
               muted />
      </div>
    );
  }
}
