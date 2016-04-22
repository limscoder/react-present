import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const decoratorCode = `@PureRender
@WithValidation
class TextInput extends React.Component {
  ...
}

...

function WithValidation(TargetComponent) {
  return class WithValidation extends React.Component {
    render = () => {
      ...

      return <TargetComponent { ...props } />;
    }

    _onChange = (val) => {
      // validation logic goes here
    }
  }
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Decorators for higher order components</h1>

        <CodeBlock>
          { decoratorCode }
        </CodeBlock>
      </div>
    );
  }
}
