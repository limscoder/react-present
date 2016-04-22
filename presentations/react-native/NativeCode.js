import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const nativeCode = `// Use the @ReactMethod annotation to
// expose a native Android method.
//
// JS types bool, string, number, object, and array
// are automatically converted to the correct type.
@ReactMethod
public String getAvatarBytes(int xResolution, int yResolution) {
  return NativeAndroidApi.takePhoto()
                         .resize(xResolution, yResolution)
                         .base64();
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How is a native function called?</h1>

        <CodeBlock>
          { nativeCode }
        </CodeBlock>
      </div>
    );
  }
}
