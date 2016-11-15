import React from 'react';

const imgSrc = require('./images/cell-phone.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>@limscoder</h1>

        <ul>
          <li>react-present: <span className="rcp-Highlight">https://github.com/limscoder/react-present</span></li>
          <li>particle-sun: <span className="rcp-Highlight">https://github.com/limscoder/particle-sun</span></li>
          <li>reducks: <span className="rcp-Highlight">https://github.com/limscoder/reducks</span></li>
        </ul>
      </div>
    );
  }
}
