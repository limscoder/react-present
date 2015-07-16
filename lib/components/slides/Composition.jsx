import React from 'react';

const validatorCompositionSrc = require('../../images/validatorComposition.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>Use composition instead</h1>

        <img src={ validatorCompositionSrc } />
      </div>
    );
  }
}
