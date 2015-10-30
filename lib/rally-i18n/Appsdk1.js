import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>appsdk option #1</h1>

        <ul>
          <li>create <code>i18n</code> dependency that both <code>churro</code> and <code>appsdk</code> depend on</li>
          <li>pros: formatting and translations always in sync, optimal client download size</li>
          <li>cons: dependency hell</li>
        </ul>

        <h2>option #1.a</h2>
        <ul>
          <li>combine <code>churro</code> and <code>appsdk</code> and <code>app-catalog</code> repos and deploy at the same time</li>
          <li>shared code without dependency hell</li>
        </ul>

      </div>
    );
  }
}
