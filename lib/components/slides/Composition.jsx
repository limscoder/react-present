import React from 'react';

const validatorCompositionSrc = require('../../images/validatorComposition.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Use composition instead</h1>

        <img src={ validatorCompositionSrc } />
      </div>
    );
  }
});
