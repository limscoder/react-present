import React from 'react';
import CodeBlock from '../components/CodeBlock';

const mixinCode = `React.createClass({
  mixins: [ValidationMixin]

  ...`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>That sounds like a mixin!</h1>

        <CodeBlock>
          { mixinCode }
        </CodeBlock>
      </div>
    );
  }
}
