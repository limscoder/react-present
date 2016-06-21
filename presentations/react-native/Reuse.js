import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>reused between web and native</h1>

        <ul>
          <li><h3>Everything except the views and routing</h3></li>
          <li>Data fetches</li>
          <li>Redux reducers, selectors, and actions</li>
        </ul>

        <br />
        <br />

        <ul>
          <li><h3>Watch out for platform specific code</h3></li>
          <li>LocalStorage (browser only)</li>
          <li>AsyncStorage (react-native only)</li>
        </ul>
      </div>
    );
  }
}
