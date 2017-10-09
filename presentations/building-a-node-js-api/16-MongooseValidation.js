import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code1 = `
username: { type: String, ..., validate: usernameValidator }
`;

const code2 = `const usernameValidator = {
  validator: function(input) {
    return validator.isEmail(input) 
      && validator.isLowercase(input);
  },
  msg: \`
  {VALUE} is not a valid email address or is not all lowercase
  \`
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Schema validation</h1>

        <CodeBlock id="code1">
          {code1}
        </CodeBlock>

        <CodeBlock id="code2">
          {code2}
        </CodeBlock>
      </div>
    );
  }
}
