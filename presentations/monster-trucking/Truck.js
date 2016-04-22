import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const imgSrc = require('./images/monster-sparks.gif');

const code = `import React from 'react';
import { awesome } from 'GraveDigger';

export default class Truck extends React.Component {
  render() {
    return awesome.sparks();
  }
}
`;
const notes = `\`${code}\``;

export default class Slide extends React.Component {
  static notes = notes

  render() {
    return (
      <div>
        <h1>
          More Monster Trucks!
        </h1>

        <img src={ imgSrc } />

        <CodeBlock id="truck">
          { code }
        </CodeBlock>
      </div>
    );
  }
}
