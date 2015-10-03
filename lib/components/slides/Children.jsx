import React from 'react';
import CodeBlock from '../CodeBlock.jsx';

const childCode = `<Form>
  <TextInput label="Name" />
  <DropDown label="Favorite Pet" />
  <ColorPicker label="Favorite Color" />
</Form>`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>props.children: your best friend</h1>

        <CodeBlock>
          { childCode }
        </CodeBlock>
      </div>
    );
  }
}
