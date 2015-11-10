import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Characteristics of highly reusable components</h1>

        <ul>
          <li>Can be composed in unexpected ways to create new components, pages, and apps</li>
          <li>Stateless API</li>
          <li>Render function is pure</li>
          <li>Prefer <code>props</code> over <code>state</code></li>
          <li>Easy to unit test</li>
          <li>Looks and behaves the same throughout an app</li>
        </ul>
      </div>
    );
  }
}
