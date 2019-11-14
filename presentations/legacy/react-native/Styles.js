import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const componentCode = `/**
 * StyleSheets are defined in Javascript
 * and support a common subset of CSS.
 *
 * Layout uses s simplified version of flexbox.
 */
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

function StyledComponent() {
  return <View style={ styles.content } />;
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Styling components</h1>

        <CodeBlock>
          { componentCode }
        </CodeBlock>
      </div>
    );
  }
}
