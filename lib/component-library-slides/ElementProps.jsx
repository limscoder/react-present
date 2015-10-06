import React from 'react';
import CodeBlock from '../components/CodeBlock';

const elementPropsCode = `const DataTable = React.createClass({
  propTypes: {
    columns: React.PropTypes.element,
    rows: React.PropTypes.element,
    pager: React.PropTypes.element
  }
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Refactor element props into children.</h1>

        <CodeBlock>
          { elementPropsCode }
        </CodeBlock>
      </div>
    );
  }
}
