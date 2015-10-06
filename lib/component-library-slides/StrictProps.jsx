import React from 'react';
import CodeBlock from '../components/CodeBlock';

const lintPropsSrc = require('./images/lintProps.png');

const escalateWarningsCode = `console.warn = (warning) {
  throw new Error('warning:', warning);
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Be strict with your props</h1>

        <p>Lint your props</p>
        <img src={ lintPropsSrc } />

        <CodeBlock>
          { escalateWarningsCode }
        </CodeBlock>
      </div>
    );
  }
}
