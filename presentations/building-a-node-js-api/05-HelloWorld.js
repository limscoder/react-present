import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const _console = `console.log('Hello World\\n);
`;

const terminal = `$ node server.js
Hello World
$`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>

        <CodeBlock id="console">
          { _console }
        </CodeBlock>

        <CodeBlock id="terminal">
          { terminal }
        </CodeBlock>
      </div>
    );
  }
}
