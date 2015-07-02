import React from 'react';

const wtfSrc = require('../../images/wtf.jpg');

export default React.createClass({
  render() {
    return (
      <div>
        <p>Create a <code>ValidationMixin</code> and apply it to any components that require validation.</p>

        <div className="rcp-SlideDeck-Centered">
          <img src={ wtfSrc } />
        </div>

        <ul>
          <li>Mixins don't work with ES6 classes</li>
          <li>What if you need <code>shouldComponentUpdate</code>?</li>
          <li><code>this.setState()</code> outside of component can be confusing.</li>
        </ul>
      </div>
    );
  }
});
