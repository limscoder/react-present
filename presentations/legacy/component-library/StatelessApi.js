import React from "react";
import CodeBlock from "../../lib/components/CodeBlock";

const statelessCode = `export default class Expander extends React.Component {
  render() {
    const clsName = classNames({
      expanded: this.props.expanded
    });

    return <div className={ clsName }
                onClick={ this.props.onClick } />;
  }
}

Expander.propTypes = {
  expanded: PropTypes.bool,
  onClick: PropTypes.func
};`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>PropTypes are the API</h1>

        <p>Remove state and mutating methods like <code>toggle</code></p>

        <CodeBlock>
          {statelessCode}
        </CodeBlock>
      </div>
    );
  }
}
