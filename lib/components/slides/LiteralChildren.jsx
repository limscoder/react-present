import React from 'react';

const literalChildrenSrc = require('../../images/literalChildren.png');
const sortChildrenSrc = require('../../images/sortChildren.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Child elements don't have to be literal children.</h1>

        <img src={ literalChildrenSrc } />
        <br />
        <img src={ sortChildrenSrc } />
      </div>
    );
  }
});
