import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const componentCode = `class NativeComponent extends React.Component {
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
        <h1>What does a component look like?</h1>

        <CodeBlock>
          { componentCode }
        </CodeBlock>
      </div>
    );
  }
}
