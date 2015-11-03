import React from 'react';

const imgSrc = require('./images/wat.gif');
const multiByte = '€ 함수 목록';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>services</h1>

        <ul>
          <li>must have tests for multi-byte unicode character input and output</li>
          <li>start today!</li>
          <li>strings within contract tests should contain multi-byte characters</li>
          <li>UI, integration, guitests should contain multi-byte characters</li>
          <li>do your regexes break?</li>
          <li>error messages displayed to users will be localized (sometime...)</li>
          <li>public docs for public apis will be localized (sometime...)</li>
        </ul>

      </div>
    );
  }
}
