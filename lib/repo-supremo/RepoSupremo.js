import React from 'react';

const imgSrc = require('./images/single_deployment.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>the solution: a single client app service for UE</h1>

        <ul>
          <li>contains all client-side UE app code</li>
          <li>deployed independently of other services, including ALM</li>
        </ul>

        <img src={ imgSrc } />
      </div>
    );
  }
}
