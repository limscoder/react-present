import React from 'react';

const videoSrc = require('./images/native-debug.mov');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>debugging</h1>

        <ul>
          <li>JS only code changes are hot patched with no compilation required</li>
          <li>In-app debugger + remote debugging in Chrome for JS code</li>
        </ul>

        <video src={ videoSrc }
               autoPlay
               loop
               muted />
      </div>
    );
  }
}
