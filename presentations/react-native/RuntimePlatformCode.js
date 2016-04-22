import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const platformCode = `import { Platform } from React;

if (Platform.OS === 'ios') {
  ...
}

if (Platform.Version === 21) {
  ...
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How do you use platform specific JS at run time?</h1>

        <CodeBlock>
          { platformCode }
        </CodeBlock>
      </div>
    );
  }
}
