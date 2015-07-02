import React from 'react';

const validationSrc = require('../../images/validation.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Validation API and UI should be the same for all form elements.</li>
          <li>Validation routines and error messages need to be configurable.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ validationSrc } />
        </div>
      </div>
    );
  }
});
