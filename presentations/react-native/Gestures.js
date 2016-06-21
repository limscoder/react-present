import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>touch events and gestures</h1>

        <ul>
          <li>Low-level multi-touch gesture interface in JS: Touchable component</li>
          <li>May need to drop down to native level for more complicated gestures</li>
        </ul>
      </div>
    );
  }
}
