import React from 'react';

const failSrc = require('./images/squirrel-fail.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={ failSrc } />

        <br />
        <br />

        <ul>
          <li>Mixins don't work with ES6 classes.</li>
          <li>One-per-component lifecycle method conflicts.</li>
          <li><code>this.setState()</code> in multiple files can be confusing.</li>
        </ul>
      </div>
    );
  }
}
