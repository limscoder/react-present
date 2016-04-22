import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Native UI Views Glued Together with Javascript</h1>

        <ul>
          <li>Native views implement an interface so they can be consumed as a React component</li>
          <li>UI is composed with JSX and automatically updated when props change</li>
          <li>Data fetching, state storage, business logic is in Javascript</li>
        </ul>
      </div>
    );
  }
}
