import React from 'react';
import CodeBlock from '../components/CodeBlock';

const namespacingCode = `<table className="smb-DataTable">
  <tr className="smb-DataTable-Row is-draggable">
    <td className="smb-DataTable-Cell smb-DataTable-Cell--dragHandle" />
    <td className="smb-DataTable-Cell smb-DataTable-Cell--name is-editable" />
  </tr>

  <tr className="smb-DataTable-Row--myCustomTheme" />
</table>`;

const requireCode = `require('./my-component.scss');

class MyComponent extends React.Component {
  ...
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>CSS namespacing is the least painful option.</h1>

        <p>Use <a href="https://suitcss.github.io/"><code>Suit CSS</code></a> namespacing convention.</p>

        <CodeBlock id="namespacing">
          { namespacingCode }
        </CodeBlock>

        <p>Keep the styles close to the component</p>

        <CodeBlock id="require">
          { requireCode }
        </CodeBlock>
      </div>
    );
  }
}
