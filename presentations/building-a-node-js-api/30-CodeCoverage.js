import React from 'react';

import img from './images/test-results.jpg';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={img}/>
        </div>
        <div>
          <a
            href="file:///home/victor/dev/novartis-pond/Engine42/coverage/lcov-report/index.html">code coverage</a>
        </div>
      </div>
    );
  }
}
