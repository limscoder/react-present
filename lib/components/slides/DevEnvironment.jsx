import React from 'react';

const imgSrc = require('../../images/kitt.gif');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Use a separate <a href="http://urro.ci.f4tech.com/job/sombrero/lastSuccessfulBuild/artifact/dist/demo/index.html">demo app</a> for development.</h1>

        <img src={ imgSrc } />
      </div>
    );
  }
});
