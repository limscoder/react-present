import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Other stuff you should know</h1>

        <ul>
          <li>Learn how to use React's performance tools -- <code>React.addons.Perf</code></li>
          <li>Implement <code>shouldComponentUpdate</code> to make things faster</li>
          <li>Degrade to direct DOM manipulation to solve performance bottlenecks</li>
          <li>Use <code>react-a11y</code> to help detect accesibility problems</li>
          <li>Use <code>react-intl</code> for internationalizing components (in your app code)</li>
          <li>Don't use <code>jest</code>. It's slow and clunky</li>
        </ul>

      </div>
    );
  }
}
