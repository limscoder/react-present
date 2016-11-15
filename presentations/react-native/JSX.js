import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const componentCode = `class ComposedComponent extends React.Component {
  render {
    <View>
      <Text>{ this.props.name }</Text>
      <Text>{ this.props.title }</Text>
      <AvatarPicker />
    </View>
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1><span className="rcp-Highlight">react-native</span> component</h1>

        <CodeBlock>
          { componentCode }
        </CodeBlock>
      </div>
    );
  }
}
