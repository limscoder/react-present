import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const code = `UserSchema.methods.getSortType = function() {
  return this.sortType ? 'ASC' : 'DESC';
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Schema methods</h1>

        <CodeBlock id="code">
          {code}
        </CodeBlock>
      </div>
    );
  }
}
