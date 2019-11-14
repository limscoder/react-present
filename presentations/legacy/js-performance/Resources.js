import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Link from './components/Link';
import elephantSrc from './images/elephant.gif';

export default function () {
  return (
    <Slide>
      <Title>optimize your apps!</Title>
      <img src={elephantSrc} alt="elephant" />
    </Slide>);
}
