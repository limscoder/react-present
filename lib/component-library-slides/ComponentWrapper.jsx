import React from 'react';
import CodeBlock from '../components/CodeBlock';

const wrapperCode = `const ValidatingInput = withValidation(TextInput);

...

function withValidation(TargetComponent) {
  return React.createClass({
    ...

    render() {
      const props = Object.assign({
        onChange: this._onChange,
        className: this.state.validationMessage ? 'is-invalid' : 'is-valid'
      }, this.props);

      return <TargetComponent { ...props } />;
    },

    _onChange(val) {
      // validation logic goes here
    }
  });
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
