import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import imgSrc from './images/churro.png';

export default function () {
  return (
    <Slide>
      <Title>Case Study: too many tests</Title>
      <img src={ imgSrc } alt="tests" />
    </Slide>);
}
