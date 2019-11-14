import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import imgSrc from './images/freshtracks.png';

export default function () {
  return (
    <Slide>
      <Title>Case Study: Metrics</Title>
      <img src={ imgSrc } alt="performance" />
    </Slide>);
}
