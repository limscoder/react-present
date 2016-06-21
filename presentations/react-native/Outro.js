import React from 'react';

const imgSrc = require('./images/cell-phone.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>@limscoder</h1>

        <ul>
          <li>react-present: https://github.com/limscoder/react-present</li>
          <li>particle-sun: https://github.com/limscoder/particle-sun</li>
          <li>reducks: https://github.com/limscoder/reducks</li>
        </ul>
      </div>
    );
  }
}
