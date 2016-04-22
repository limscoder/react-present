import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const importCode = `import AvatarPicker from './components/AvatarPicker';`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How do you use platform specific modules at build time?</h1>

        <CodeBlock>
          { importCode }
        </CodeBlock>

        <ul>
          <li>
            <pre>/components</pre>
            <ul>
              <li><pre>-- AvatarPicker.ios.js</pre></li>
              <li><pre>-- AvatarPicker.android.js</pre></li>
              <li><pre>-- AvatarPicker.osx.js</pre></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
