import React from 'react';

const reactConfSrc = require('./images/react-conf.png');

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={ reactConfSrc } style={ {marginTop: '2.5rem'} }/>
      </div>
    );
  }
}
