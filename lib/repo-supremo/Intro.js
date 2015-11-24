import React from 'react';

const imgSrc = require('./images/deploy_dependencies.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>the problem: cross deploy dependencies</h1>

        <img src={ imgSrc } />
      </div>
    );
  }
}
