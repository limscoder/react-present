import React from 'react';

const dragonSrc = require('../../images/dragons.gif');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Inline styles: here be slightly cuter dragons</h1>

        <img src={ dragonSrc } width={ 490 } height={ 320 }/>
      </div>
    );
  }
});
