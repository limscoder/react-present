import React from 'react';

const formSrc = require('../../images/form.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>props.children: your best friend</h1>

        <img src={ formSrc } />
      </div>
    );
  }
});
