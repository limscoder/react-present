import React from 'react';
import CodeBlock from '../components/CodeBlock';

const lintPropsSrc = require('./images/lint-props.png');

const propTypesCode = `// always use PropTypes!

Expander.propTypes = {
  expanded: React.PropTypes.bool,
  onClick: React.PropTypes.func
};`

const escalateWarningsCode = `console.warn = (warning) {
  throw new Error('warning:', warning);
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Be strict with your props</h1>

        <CodeBlock id="propTypes">
          { propTypesCode }
        </CodeBlock>

        <CodeBlock id="escalate">
          { escalateWarningsCode }
        </CodeBlock>

          <img src={ lintPropsSrc } />
      </div>
    );
  }
}
