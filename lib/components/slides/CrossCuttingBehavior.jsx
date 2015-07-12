import React from 'react';

const validationSrc = require('../../images/validation.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>How to add cross-cutting behavior?</h1>

        <p>Validation API and UI should be the same for all form elements.</p>

        <img src={ validationSrc } />
      </div>
    );
  }
});
