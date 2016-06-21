import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const componentCode = `/**
 * StyleSheets are defined in Javascript
 * and support a common subset of CSS.
 *
 * A simplified version of flexbox is the only layout option.
 */
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

class NativeComponent extends React.Component {
  render() {
    return <View style={ styles.content } />;
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>styling components</h1>

        <CodeBlock>
          { componentCode }
        </CodeBlock>
      </div>
    );
  }
}
