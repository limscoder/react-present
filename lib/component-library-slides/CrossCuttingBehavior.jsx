import React from 'react';

const validationSrc = require('./images/validation.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>How to add cross-cutting behavior?</h1>

        <p>Validation API and UI should be the same for all form elements.</p>

        <img src={ validationSrc } />
      </div>
    );
  }
}
