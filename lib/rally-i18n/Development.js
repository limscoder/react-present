import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>development workflow</h1>

        <ul>
          <li>day-to-day development stays the same, but strings are externalized as <code>en</code></li>
          <li>use psuedo-translation when you need to verify layout or unicode support</li>
          <li>translation happens out-of-band from your story</li>
        </ul>
      </div>
    );
  }
}
