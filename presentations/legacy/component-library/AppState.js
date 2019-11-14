import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const containerCode = `import { connect } from 'react-redux';
import { toggleExpand } from './ActionCreators';

function stateMapper(state) {
  return {
    expanded: state.expanded
  };
}

function actionMapper(dispatch) {
  return {
    onClick() {
      dispatch(toggleExpand());
    }
  };
}

@connect(stateMapper, actionMapper)
class SmartExpander extends React.Component {
  render() {
    return <Expander { ...this.props } />;
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Composing components into an app</h1>

        <CodeBlock>{ containerCode }</CodeBlock>
      </div>
    );
  }
}
