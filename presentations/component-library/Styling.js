import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const wtfSrc = require('./images/wtf.gif');

const cssCode = `render() {
  return (
    <div>
      <span className="label">Name</span>
      <input />
    </div>
  );
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>CSS: here be dragons</h1>

        <img src={ wtfSrc } />

        <CodeBlock>
          { cssCode }
        </CodeBlock>
      </div>
    );
  }
}
