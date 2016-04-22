import React from 'react';
import CodeBlock from '../../lib/components/CodeBlock';

const wrapperCode = `const ValidatingInput = withValidation(TextInput);

...

function withValidation(TargetComponent) {
  return class WithValidation extends React.Component {
    render() {
      const props = Object.assign({
        onChange: this._onChange,
        className: this.state.isValid ? 'is-valid' : 'is-invalid'
      }, this.props);

      return <TargetComponent { ...props } />;
    }

    _onChange(val) {
      // validation logic goes here
    }
  };
}`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Higher order component factory</h1>

        <CodeBlock>
          { wrapperCode }
        </CodeBlock>
      </div>
    );
  }
}
