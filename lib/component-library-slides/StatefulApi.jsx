import React from 'react';
import CodeBlock from '../components/CodeBlock';

const statefulCode = `export default React.createClass({
  propTypes: {
    initiallyExpanded: React.PropTypes.bool
  },

  getInitialState() {
    return {
      expanded: this.props.initiallyExpanded
    };
  },

  render() {
    return <div onClick={ this.toggle } />;
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
});`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Mo' state Mo' problems</h1>

        <CodeBlock>
          { statefulCode }
        </CodeBlock>
      </div>
    );
  }
}
