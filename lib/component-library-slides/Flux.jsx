import React from 'react';
import CodeBlock from '../components/CodeBlock';

const containerCode = `import { toggleExpand } from './ActionCreators';

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

@ConnectWithReduxState(stateMapper, actionMapper)
class ExpanderContainer extends React.Component {
  render() {
    return <Expander expanded={ this.props.expanded } onClick={ this.props.onClick } />;
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Composing components into an app</h1>

        <ul>
          <li>Wrap reusable components within <code>containers</code> (this example uses <code>react-redux</code>)</li>
          <li>Separate <code>container</code> code from reusable component code with different directories or repos.</li>
        </ul>

        <CodeBlock>{ containerCode }</CodeBlock>
      </div>
    );
  }
}
