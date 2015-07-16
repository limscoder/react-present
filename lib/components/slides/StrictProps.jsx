import React from 'react';
import Highlight from 'react-highlight';

const lintPropsSrc = require('../../images/lintProps.png');

const escalateWarningsCode = `
console.warn = (warning) {
  throw new Error('warning:', warning);
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Be strict with your props</h1>

        <p>Lint your props</p>
        <img src={ lintPropsSrc } />

        <Highlight className="jsx">
          { escalateWarningsCode }
        </Highlight>
      </div>
    );
  }
}
