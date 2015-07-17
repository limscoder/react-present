import React from 'react';
import Highlight from 'react-highlight';

const decoratorCallCode = `
@WithValidation
class TextInput extends React.Component {
  ...
}
`;
const decoratorCode = `
function WithValidation(TargetComponent) {
  return class WithValidation extends React.Component {
    static displayName = TargetComponent.displayName + '-withValidation'

    static propTypes = Object.assign({
      getValidationMessage: React.PropTypes.func
    }, TargetComponent.propTypes)

    state = {
      validationMessage: false
    }

    render = () => {
      const props = Object.assign({onChange: this._onChange}, this.props);
      props.className = this.state.validationMessage ? 'is-invalid' : 'is-valid';
      return <TargetComponent { ...props } />;
    }

    _onChange = (val) => {
      const validationMessage = this.props.getValidationMessage && this.props.getValidationMessage(val);
      this.setState({
        validationMessage: validationMessage
      });
    }
  }
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Use decorators to replace mixins with ES6 classes</h1>

        <Highlight className="jsx">
          { decoratorCallCode }
        </Highlight>

        <Highlight className="jsx">
          { decoratorCode }
        </Highlight>
      </div>
    );
  }
}
