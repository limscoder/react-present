import React from 'react';

const imgSrc = require('./images/i-love-churros.jpg');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>churro</h1>

        <ul>
          <li><code>react-intl</code> for message formatting</li>
          <li><code>safari</code> and <code>&lt; IE11</code> require a <code>Intl</code> polyfill</li>
          <li>
            translations provided in one of 2 ways:
            <ul>
              <li>1 locale-file with all translations downloaded asynchronously</li>
              <li>translations inlined within components, separate churro build for each locale</li>
            </ul>
          </li>
        </ul>

        <img src={ imgSrc } width="40%" height="40%"/>

      </div>
    );
  }
}
