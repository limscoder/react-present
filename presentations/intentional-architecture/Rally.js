import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';
import rallySrc from './images/rally.jpg';
import agileSrc from './images/agile-central.png';

export default function () {
  return (
    <Slide>
      <img src={ rallySrc } alt="rally" />
      <br />
      <br />
      <br />
      <img src={ agileSrc } alt="agile central" />
    </Slide>);
}
