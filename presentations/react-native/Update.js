import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>updating clients</h1>

        <ul>
          <li>JS code can be hot updated on clients <em>without</em> an app store release</li>
          <li>Native code changes require a new app store version and release</li>
        </ul>
      </div>
    );
  }
}
