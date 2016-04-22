import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How mature is react-native?</h1>

        <ul>
          <li>JS/React runtime: medium maturity, stable</li>
          <li>Out-of-the-box react components: more work needed, expect to frequently code native components</li>
        </ul>
      </div>
    );
  }
}
