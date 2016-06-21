import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const htmlCode = `class NativeComponent extends React.Component {
  render {
    return <WebView html={ this.props.html } />;
  }
}`;

const urlCode = `class NativeComponent extends React.Component {
  render {
    return <WebView url="http://rallydev.com" />;
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>embedding HTML</h1>

        <CodeBlock id="html">
          { htmlCode }
        </CodeBlock>

        <CodeBlock id="url">
          { urlCode }
        </CodeBlock>
      </div>
    );
  }
}
