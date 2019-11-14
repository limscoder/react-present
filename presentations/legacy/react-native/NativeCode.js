import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const nativeCode = `// Use the @ReactMethod annotation to
// expose a native Android method.
//
// react-native automatically coerces arguments
// and return value types between JS and native
@ReactMethod
public void sendText(String message, int to) {
  SmsManager smsManager = SmsManager.getDefault();
  smsManager.sendTextMessage(to, message);
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Native functions</h1>

        <CodeBlock>
          { nativeCode }
        </CodeBlock>
      </div>
    );
  }
}
