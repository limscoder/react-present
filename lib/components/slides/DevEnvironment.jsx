import React from 'react';

const imgSrc = require('../../images/kitt.gif');

export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>Use a separate <a href="http://urro.ci.f4tech.com/job/sombrero/lastSuccessfulBuild/artifact/dist/demo/index.html">component demo app</a> for development.</li>
        </ul>

        <div className="rcp-SlideDeck-Centered">
          <img src={ imgSrc } />
        </div>
      </div>
    );
  }
});
