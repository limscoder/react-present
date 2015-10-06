import React from 'react';
import CodeBlock from '../components/CodeBlock';

const decoratorCode = `@PureRender
@WithValidation
class TextInput extends React.Component {
  ...
}

...

function WithValidation(TargetComponent) {
  return class WithValidation extends React.Component {
    ...

    render = () => {
      const props = {
        ...this.props,
        onChange: this._onChange.bind(this),
        className: this.state.validationMessage ? 'is-invalid' : 'is-valid'
      };

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
        <h1>Use decorators to replace mixins</h1>

        <CodeBlock>
          { decoratorCode }
        </CodeBlock>
      </div>
    );
  }
}
