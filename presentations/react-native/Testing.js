import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How are react-native apps tested?</h1>

        <ul>
          <li>JS unit tests written with Jest</li>
          <li>Native unit and functional tests written in platform specific framework</li>
        </ul>
      </div>
    );
  }
}
