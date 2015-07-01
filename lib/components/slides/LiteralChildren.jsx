import React from 'react';

const literalChildrenSrc = require('../../images/literalChildren.png');
const sortChildrenSrc = require('../../images/sortChildren.png');

export default React.createClass({
  render() {
    return (
      <div>
        <div className="rcp-SlideDeck-Centered">
          <img src={ literalChildrenSrc } />
          <br />
          <img src={ sortChildrenSrc } />
        </div>
      </div>
    );
  }
});
