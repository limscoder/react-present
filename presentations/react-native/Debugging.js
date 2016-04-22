import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How are react-native apps debugged?</h1>

        <ul>
          <li>Connect to device emulator or real device in debug mode</li>
          <li>JS only code changes are hot patched with no compilation required</li>
          <li>In-app debugger + remote debugging in Chrome for JS code</li>
          <li>Use native debugging tools for native code</li>
        </ul>
      </div>
    );
  }
}
