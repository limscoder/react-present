import React from 'react';
import CodeBlock from '../components/CodeBlock';

const compositionCode = `<Validator getValidationMessage={ numberValidator }>
  <NumberInput />
</Validator>

<Validator getValidationMessage={ colorValidator }>
  <ColorPicker />
</Validator>`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Use composition instead</h1>

        <CodeBlock>
          { compositionCode }
        </CodeBlock>
      </div>
    );
  }
}
