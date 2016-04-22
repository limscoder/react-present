import React from 'react';

const notes = `
 * monster trucks are sweet!
 * remember to make fun of angular
`;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          react-native
        </h1>

        <ul>
          <li>knowledge transfers from regular-react</li>
          <li>uses native UI components</li>
          <li>easy integration with customized native code</li>
          <li>re-use redux reducers and business logic from browser and server codebase</li>
        </ul>
      </div>
    );
  }
}
