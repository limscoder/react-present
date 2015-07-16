import React from 'react';
import Highlight from 'react-highlight';

const wrapperCallCode = `const ValidatingInput = withValidation(Input);`;
const wrapperCode = `
function withValidation(TargetComponent) {
  return React.createClass({
    displayName: TargetComponent.displayName + '-withValidation',

    propTypes: Object.assign({
      getValidationMessage: React.PropTypes.func
    }, TargetComponent.propTypes),

    getInitialState() {
      return {
        validationMessage: false
      };
    },

    render() {
      const props = Object.assign({onChange: this._onChange}, this.props);
      props.className = this.state.validationMessage ? 'is-invalid' : 'is-valid';
      return <TargetComponent { ...props } />;
    },

    _onChange(val) {
      const validationMessage = this.props.getValidationMessage && this.props.getValidationMessage(val);
      this.setState({
        validationMessage: validationMessage
      });
    }
  });
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Composition with helper functions</h1>

        <Highlight className="jsx">
          { wrapperCallCode }
        </Highlight>
        <Highlight className="jsx">
          { wrapperCode }
        </Highlight>
      </div>
    );
  }
}
