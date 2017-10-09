import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `UserSchema.plugin(hashFieldPlugin, { field: 'password' });
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Schema plugins</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
