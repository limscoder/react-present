import React from 'react';

const namespacingSrc = require('../../images/namespacing.png');
const themeSrc = require('../../images/theme.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>CSS namespacing is the least painful option</h1>

        <img src={ namespacingSrc } />

        <p>Allow consumers to pass arbitrary class names for flexible customization.</p>

        <img src={ themeSrc } />
      </div>
    );
  }
}
