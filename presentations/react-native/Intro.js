import React from 'react';

const imgSrc = require('./images/cell-phone.gif');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img style={ {marginTop: 200} } src={ imgSrc } />
      </div>
    );
  }
}
