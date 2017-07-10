import React from 'react';
import Slide from './components/Slide';
import bunnySrc from './images/bunny.gif';

export default function () {
  return (
    <Slide>
      <img src={bunnySrc} alt="bunny" />
    </Slide>);
}
