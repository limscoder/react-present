import React from 'react';

const formSrc = require('../../images/form.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>props.children: your best friend</h1>

        <img src={ formSrc } />
      </div>
    );
  }
}
