import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const importCode = `import AvatarPicker from './components/AvatarPicker';`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Platform specific builds</h1>

        <ul style={ {} }>
          <li>
            <pre>/components</pre>
            <ul>
              <li><pre>-- AvatarPicker.ios.js</pre></li>
              <li><pre>-- AvatarPicker.android.js</pre></li>
              <li><pre>-- AvatarPicker.macos.js</pre></li>
            </ul>
          </li>
        </ul>

        <CodeBlock>
          { importCode }
        </CodeBlock>
      </div>
    );
  }
}
