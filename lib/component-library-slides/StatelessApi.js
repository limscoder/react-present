import React from 'react';
import CodeBlock from '../components/CodeBlock';

const statelessCode = `export default React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  render() {
    const clsName = classNames({
      expanded: this.props.expanded
    });

    return <div className={ clsName }
                onClick={ this.props.onClick } />;
  }
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>PropTypes are the API</h1>

        <p>Remove state and mutating methods like 'toggle'.</p>

        <CodeBlock>
          { statelessCode }
        </CodeBlock>
      </div>
    );
  }
}
