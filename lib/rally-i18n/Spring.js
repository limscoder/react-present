import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>spring</h1>

        <ul>
          <li>use built-in spring <code>i18n</code> tools</li>
          <li>ensure client and server use same locale</li>
          <li>need to wrap all dates and numbers with a formatter</li>
          <li>extract more text into resource bundles</li>
        </ul>

      </div>
    );
  }
}
