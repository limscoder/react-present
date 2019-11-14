import React from 'react';

const videoSrc = require('./images/native-debug.mov');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Debugging in <span className="rcp-Highlight">chrome</span></h1>

        <video src={ videoSrc }
               autoPlay
               loop
               muted />
      </div>
    );
  }
}
