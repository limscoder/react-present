import React from 'react';

const dragonSrc = require('../../images/dragons.gif');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Complicated workarounds for psuedo-selectors.</li>
          <li><code>:before</code>, <code>:after</code></li>
          <li>Can't re-use with non-react markup.</li>
          <li>Supporting multiple browsers and versions is tricky.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ dragonSrc } />
        </div>
      </div>
    );
  }
});
