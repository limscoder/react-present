import React from 'react';

const phoneSrc = require('./images/cell-phone.gif');
const reactSrc = require('./images/react.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={ reactSrc } style={ {marginRight: '2rem'} }/>
        <img src={ phoneSrc } />
      </div>
    );
  }
}
