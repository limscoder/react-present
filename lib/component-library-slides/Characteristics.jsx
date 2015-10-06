import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Characteristics of highly reusable components</h1>

        <ul>
          <li>Can be composed in unexpected ways to create pages and apps.</li>
          <li>Uses pure render function (no global state).</li>
          <li>Looks and behaves the same throughout an app.</li>
          <li>API is designed for generic use cases.</li>
        </ul>
      </div>
    );
  }
}
