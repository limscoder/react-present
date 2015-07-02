import React from 'react';

const validatorCompositionSrc = require('../../images/validatorComposition.png');

export default React.createClass({
  render() {
    return (
      <div>
        <p>Much better</p>

        <div className="rcp-SlideDeck-Centered">
          <img src={ validatorCompositionSrc } />
        </div>

        <ul>
          <li>Always have to wrap <code>NumberInput</code> to get validation.</li>
          <li>Validation props on <code>Validator</code> instead of the input.</li>
          <li>Kind of a pain if validators are used on all fields.</li>
        </ul>
      </div>
    );
  }
});
