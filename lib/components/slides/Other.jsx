import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Other stuff components should probably have</h1>

        <ul>
          <li>Use <code>immutablejs</code> for prop values instead of mutable types <code>Object</code> and <code>Array</code>.</li>
          <li>Implement <code>shouldComponentUpdate</code> to make things faster.</li>
          <li>Degrade to direct DOM manipulation to solve performance bottlenecks.</li>
          <li>Use <code>react-a11y</code> to help detect accesibility problems.</li>
          <li>Use <code>react-intl</code> for internationalizing components.</li>
          <li>Documentation to describe available <code>PropTypes</code> and usage.</li>
          <li>Presentation repo: <a href="https://github.com/limscoder/react-components-presentation"><code>https://github.com/limscoder/react-components-presentation</code></a></li>
        </ul>

      </div>
    );
  }
}
