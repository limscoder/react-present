import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const fetchCode = `// es6 fetch API
// can be used in any react-native runtime,
// modern browsers, or with polyfill.

fetch('texas-ham.jpg')
  .then(function(response) {
    return response.blob();
  });`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Fetching data</h1>

        <CodeBlock>
          { fetchCode }
        </CodeBlock>
      </div>
    );
  }
}
