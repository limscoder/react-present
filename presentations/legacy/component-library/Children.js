import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const dogSrc = require('./images/dumb-dog.gif');

const childCode = `<form>
  <TextInput label="Name" />
  <DropDown label="Favorite Pet" options={ this.props.pets }/>
</form>`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>props.children: your best friend</h1>

        <p>small, discrete components enable reuse and performance tuning</p>

        <CodeBlock id="children">
          { childCode }
        </CodeBlock>
      </div>
    );
  }
}
