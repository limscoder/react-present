import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const nativeCode = `import { NativeModules } from 'react-native';

NativeModules.AndroidSms.sendText('yo!', 5551234567);`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Invoke native code from <span className="rcp-Highlight">JS</span></h1>

        <CodeBlock>
          { nativeCode }
        </CodeBlock>
      </div>
    );
  }
}
