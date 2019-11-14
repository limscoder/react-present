import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';
import freshSrc from './images/freshtracks.png';
import caSrc from './images/ca.png';

export default function () {
  return (
    <Slide>
      <img src={ freshSrc } alt="freshtracks.io" />
      <br />
      <br />
      <br />
      <img src={ caSrc } alt="ca technologies" />
    </Slide>);
}
