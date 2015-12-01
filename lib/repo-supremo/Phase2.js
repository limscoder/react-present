import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>phase 2: deployo supremo</h1>

        <ul>
          <li>ci pipeline to deploy all client app assets via burro</li>
          <li>burro improvements to cache unchanged assets and limit versions (F10859)</li>
          <li>maintain existing deploy processes in parallel for togglable switch over</li>
          <li>deploy cadence is independent from ALM and other services</li>
        </ul>
      </div>
    );
  }
}
