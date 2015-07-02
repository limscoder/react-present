import React from 'react';

const namespacingSrc = require('../../images/namespacing.png');
const themeSrc = require('../../images/theme.png');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Use <code>suitcss</code> nameing conventions.</li>
          <li>Fits into standard sass workflow.</li>
          <li>Protects against style bleed with standard CSS.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ namespacingSrc } />
        </div>

        <ul>
          <li>Allow consumers to pass arbitrary class names for flexible customization.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ themeSrc } />
        </div>
      </div>
    );
  }
});
