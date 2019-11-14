import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import  imgSrc from './images/hype_cycle.png';

export default function () {
  return (
    <Slide>
      <Title>Evaluate new technologies and processes</Title>
      <img src={ imgSrc } alt="hype" />
    </Slide>);
}
